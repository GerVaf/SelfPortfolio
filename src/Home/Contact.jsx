import React from "react";

const Contact = () => {
  return (
    <>
      <div className="p-5">
        <div className=" text-white mb-10">
          <h2 className="text-2xl">-Let's Connect</h2>
          <p className="text-lg ml-5 mb-5">Connect To ME</p>
          <p className=" text-white mb-5 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
            maxime sunt cum nobis eius iste ratione expedita beatae velit magni
            non, facilis consequatur, excepturi eaque est explicabo quos
            inventore voluptatibus!
          </p>
        </div>

        {/* input field  */}

        <div className="flex flex-col items-center gap-5 mb-5">
          <div className="flex flex-col gap-3">
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

        {/* information */}
        <div className=" pl-2 text-[10px] text-white border-l-2 border-l-[#EC2626]">
          <p>+95 942 521 2523</p>
          <p>thantzinmin667@gmail.com</p>
          <p>Yangon,Tamwe,Myit Thar Nyout</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
