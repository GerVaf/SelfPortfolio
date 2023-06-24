import React, { useEffect, useRef } from 'react';
import '../Home/Particle.css'
const Particle = ({ parent, x, y }) => {
  const canvasRef = useRef(null);
  const { canvas, ctx } = parent;
  const particleColor = returnRandomArrayitem(parent.options.particleColors);
  const radius = getLimitedRandom(1.5, 5.5);
  let opacity = 0;

  const velocity = {
    x: (Math.random() - 0.5) * parent.options.velocity,
    y: (Math.random() - 0.5) * parent.options.velocity
  };

  const update = () => {
    if (opacity < 1) {
      opacity += 0.01;
    } else {
      opacity = 1;
    }

    if (x > canvas.width + 100 || x < -100) {
      velocity.x = -velocity.x;
    }

    if (y > canvas.height + 100 || y < -100) {
      velocity.y = -velocity.y;
    }

    x += velocity.x;
    y += velocity.y;
  };

  const draw = () => {
    ctx.beginPath();
    ctx.fillStyle = particleColor;
    ctx.globalAlpha = opacity;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      update();
      draw();
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return null;
};

const ParticleNetwork = ({ parent }) => {
  const { canvas, ctx } = parent;

  const createParticles = (isInitial) => {
    const particles = [];
    const quantity = canvas.width * canvas.height / parent.options.density;

    if (isInitial) {
      let counter = 0;
      const createIntervalId = setInterval(() => {
        if (counter < quantity - 1) {
          particles.push(new Particle(parent));
        } else {
          clearInterval(createIntervalId);
        }
        counter++;
      }, 250);
    } else {
      for (let i = 0; i < quantity; i++) {
        particles.push(new Particle(parent));
      }
    }

    return particles;
  };

  const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;

    const particles = createParticles(false);

    for (let i = 0; i < particles.length; i++) {
      for (let j = particles.length - 1; j > i; j--) {
        let distance, p1 = particles[i], p2 = particles[j];
        distance = Math.min(Math.abs(p1.x - p2.x), Math.abs(p1.y - p2.y));

        if (distance > parent.options.netLineDistance) {
          continue;
        }

        distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) +
          Math.pow(p1.y - p2.y, 2)
        );

        if (distance > parent.options.netLineDistance) {
          continue;
        }

        ctx.beginPath();
        ctx.strokeStyle = parent.options.netLineColor;
        ctx.globalAlpha = (parent.options.netLineDistance - distance) / parent.options.netLineDistance * p1.opacity * p2.opacity;
        ctx.lineWidth = 0.7;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    if (parent.options.velocity !== 0) {
      requestAnimationFrame(update);
    }
  };

  useEffect(() => {
    update();

    return () => {
      cancelAnimationFrame(update);
    };
  }, []);

  return null;
};

const ParticleNetworkAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const options = {
      velocity: 1,
      density: 15000,
      netLineDistance: 200,
      netLineColor: '#929292',
      particleColors: ['#aaa']
    };

    const particleNetwork = new ParticleNetwork({ canvas, ctx, options });

    const sizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const bindUiActions = () => {
      window.addEventListener('resize', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sizeCanvas();
        particleNetwork.createParticles();
      });
    };

    sizeCanvas();
    particleNetwork.init();
    bindUiActions();
  }, []);

  return (
    <canvas
      className="particle-network-animation"
      ref={canvasRef}
    />
  );
};

export default ParticleNetworkAnimation;
