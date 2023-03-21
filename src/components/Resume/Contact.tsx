import React from "react";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IconBase } from "react-icons/lib";

const contact_info = [
  { logo: MdEmail, text: "hamza_dev@gmail.com" },
  { logo: MdWhatsapp, text: "+92 2240608888" },
  { logo: ImLocation2, text: "Karachi" },
];

const Contact = () => {
  return (
    <section id="section" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit"> Send Message </button>
          </form>

          <div className="flex flex-col  gap-7">
            <div className="flex gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <MdEmail />
              </div>
              <p className="text-lg"> hamza_dev@gamil.com </p>
            </div>

            <div className="flex gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <MdWhatsapp />
              </div>
              <p className="text-lg"> +92 2240608888 </p>
            </div>

            <div className="flex gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ImLocation2 />
              </div>
              <p className="text-lg"> Karachi </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
