"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setSuccess(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setLoading(false);
  };

  return (
    <>
      <section
        id="contact"
        className="relative bg-gray-100 lg:mt-16 dark:bg-gray-900"
      >
        <div className="lg:relative">
          <div className="w-full h-full py-4 bg-gray-900 lg:hidden">
            <Image
              src="/images/web-dev-laptop.png"
              alt="Web development graphic"
              width={1280}
              height={1104}
              loading="lazy"
            />
          </div>
          <div className="relative hidden w-full bg-gray-900 lg:rounded-tr-3xl lg:block h-80 sm:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:h-full">
            <Image
              src="/images/web-dev-laptop.png"
              alt="Web development graphic"
              width={1280}
              height={1104}
              loading="lazy"
              className="absolute top-0 right-0 object-contain object-right w-full h-full py-8 bg-gray-900 rounded-tr-3xl max-w-7xl"
            />
          </div>
          <div className="w-full py-8 mx-auto text-left max-w-7xl">
            <div className="px-4 sm:px-6 lg:w-1/2 lg:ml-auto">
              <div className="">
                <h2 className="mt-2 mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Contact
                  </span>
                </h2>
                <h3 className="mt-2 mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Send me a message
                </h3>
                <form
                  className="grid grid-cols-1 gap-y-6"
                  onSubmit={(e) => sendMessage(e)}
                >
                  <div>
                    <label
                      htmlFor="full_name"
                      className="block mb-2 text-gray-700 font-medium dark:text-white"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      autoComplete="name"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-300 dark:text-gray-100 dark:border-gray-500 dark:bg-gray-900 focus:ring-cyan-400 focus:border-cyan-400"
                      placeholder="Hamza"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="w-full space-y-6 md:flex md:flex-grow md:space-y-0 md:space-x-6">
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-gray-700 font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm  focus:ring-cyan-400 focus:border-cyan-400"
                        placeholder="hamza@yahoo.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-gray-700 font-medium"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-cyan-400 focus:border-cyan-400"
                        placeholder="Optional"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-gray-700 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-300 dark:text-gray-100 dark:border-gray-500 dark:bg-gray-900 focus:ring-cyan-400 focus:border-cyan-400"
                      placeholder="What would you like to say?"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 filter hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
