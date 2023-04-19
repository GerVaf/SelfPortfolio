import React from "react";
import animation3 from "../assets/img/animation3.gif";
const Contact = () => {
  return (
    <>
      {/* title  */}
      <div className=" p-5 sm:flex text-white sm:mb-10 flex flex-col">
        <h2 className="sm:text-4xl text-2xl sm:mb-2">-Let's Connect</h2>
        <p className="sm:text-2xl text-lg sm:ml-10 ml-5">Connect To ME</p>
      </div>

      {/* cate and inputfield  */}
      <div className="p-5 sm:flex text-white mb-10">
        <div className=" sm:w-3/5 text-white mb-5 ">
          <p>
            Thank you for watching. I am excited about the opportunity to work
            with you and help bring your vision to life. As a web developer with
            over 1 year of experience, I have worked on a variety of projects,
            from small business websites to large e-commerce platforms. My
            expertise includes front-end development, back-end development, and
            website maintenance. I am proficient in programming languages such
            as HTML, CSS, JavaScript, React and . I believe that communication
            is key to a successful project, and I am committed to keeping you
            informed throughout the development process. I will work closely
            with you to ensure that your website meets your specific needs and
            exceeds your expectations. My goal is to provide you with a
            high-quality website that not only looks great but also performs
            well. I am confident that my skills and expertise make me the right
            fit for your project. Thank you for your consideration, and I look
            forward to the opportunity to work with you.
          </p>
          <div className="sm:flex sm:justify-center sm:items-center">
            <img src={animation3} className="sm:w-80" alt="" />
            {/* information */}
            <div>
              <div className=" ml-5 sm:ml-16 pl-2 sm:text-[20px] mb-5 text-[10px] text-white border-l-2 border-l-[#EC2626]">
                <p>+95 942 521 2523</p>
                <p>thantzinmin667@gmail.com</p>
                <p>Yangon,Tamwe,Myit Thar Nyout</p>
              </div>
            </div>
          </div>
        </div>

        {/* input field  */}

        <div className="sm:w-2/5 flex flex-col items-center gap-5 mb-5">
          <p className="sm:text-xl">Let's work with togeather</p>
          <hr className="sm:border-[#EC2626] sm:border-2 sm:w-36" />
          <div className="flex flex-col gap-3 text-black">
            <input
              type="text"
              className=" rounded-sm p-2 px-5 outline-none"
              placeholder="Enter Your Name"
            />
            <input
              type="text"
              className=" rounded-sm p-2 px-5 outline-none"
              placeholder="Enter Your Email"
            />
            <textarea
              name=""
              className=" rounded-sm p-2 px-5 outline-none"
              placeholder="Hit Me Something ....."
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button className=" px-2 py-2 bg-[#EC2626] text-white font-semibold rounded-md">
              Submit Now
            </button>
          </div>
        </div>
      </div>
      {/* <img
        src="https://assets8.lottiefiles.com/packages/lf20_Zf1puBXhjG.json"
        alt=""
      /> */}
    </>
  );
};

export default Contact;
