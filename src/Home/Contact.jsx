import React, { useRef } from "react";
import emailjs from "emailjs-com";
import animation3 from "../assets/img/animation3.gif";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // Replace 'YOUR_SERVICE_ID' with your EmailJS service ID
        "service_wpft40h",
        // Replace 'YOUR_TEMPLATE_ID' with your EmailJS template ID
        "template_e7mqtsq",
        // Use the ref to get the form element
        formRef.current,
        // Replace 'YOUR_USER_ID' with your EmailJS user ID
        "wBktBTQwvpgnAgKq5"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          // Show toast notification for successful email submission
          toast.success("Email sent successfully! I'll contact you later");

          // Add any actions after a successful email submission here
        },
        (error) => {
          console.log("Error sending email:", error.text);
          // Show toast notification for email sending error
          toast.error("Error sending email.");

          // Add any error handling code here
        }
      );

    // Reset the form after submission (optional)
    e.target.reset();
  };
  return (
    <>
      {/* title  */}
      <div className="p-5 sm:flex sm:mb-10 flex flex-col">
        <h2 className="sm:text-4xl text-2xl sm:mb-2 text-[#FD940A] font-bold">
          -Let's Connect
        </h2>
        <p className="sm:text-2xl text-lg sm:ml-10 ml-5">Connect To ME</p>
      </div>

      {/* cate and inputfield  */}
      <div className="p-5 sm:flex  mb-10">
        <div className="sm:w-3/5 mb-5">
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
              <div className="ml-5 sm:ml-16 pl-2 sm:text-[20px] mb-5 text-[10px] border-l-2 border-l-[#FD940A]">
                <p>+95 942 521 2523</p>
                <p>thantzinmin667@gmail.com</p>
                <p>Yangon,Tamwe,Myit Thar Nyout</p>
              </div>
            </div>
          </div>
        </div>

        {/* input field  */}
        {/* ... Your existing input field code ... */}
        <form
          className="sm:w-2/5 flex flex-col justify-center items-center gap-5"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-3">
            <p className="sm:text-xl text-[#FD940A] font-bold">
              Let's work with together
            </p>
            <hr className="border-[#FD940A] border sm:border-2 w-36 " />
          </div>
          <div className="flex flex-col gap-3 text-black">
            <label className="text-gray-600" htmlFor="email">Your Email*</label>
            <input
              type="text"
              className="rounded-sm p-2 px-5 outline-none border-none"
              placeholder="Enter Your Email "
              name="from_name"
              required
            />
            <label className="text-gray-600" htmlFor="about">Message*</label>
            <textarea
              name="message"
              className="rounded-sm p-2 px-5 outline-none border-none"
              placeholder="Hit Me Something ....."
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-2 py-2 bg-gradient-to-r from-[#FD940A] to-orange-500 text-white font-semibold rounded-md"
          >
            Submit Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
