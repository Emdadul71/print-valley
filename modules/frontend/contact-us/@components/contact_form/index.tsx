const ContactForm = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[1030px] w-full m-auto mt-5 lg:-mt-[180px]">
          <div className=" bg-[#FFFFFF]  shadow-[0px_40px_80px_rgba(83,94,132,0.15)]  rounded-lg	">
            <div>
              <div className="py-[40px] px-4 lg:px-[40px]">
                <h3 className="mb-8">Send a message</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      className="border px-2 py-[10px] rounded placeholder:text-[15px] w-full focus:outline-none"
                      placeholder="First Name*"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="lastName"
                      className="border px-2 py-[10px] rounded placeholder:text-[15px] w-full focus:outline-none"
                      placeholder="Last Name*"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      className="border px-2 py-[10px] rounded placeholder:text-[15px] w-full focus:outline-none"
                      placeholder="Email*"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="mobile"
                      className="border px-2 py-[10px] rounded placeholder:text-[15px] w-full focus:outline-none"
                      placeholder="Mobile Number*"
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <textarea
                      name="message"
                      className="border px-2 py-[10px] rounded placeholder:text-[15px] w-full focus:outline-none"
                      cols={6}
                      rows={6}
                      placeholder="Message"
                    />
                  </div>
                </div>

                <div className="grid justify-center items-center grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-[30px]">
                  <div>
                    <p className=" text-[#9298A0] lg:pr-16 pt-6 text-[14px]">
                      By clicking Send a message button, you agree to use our
                      “Form” terms And consent cookie usage in browser.
                    </p>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end lg:pr-6 submit_button">
                    <button
                      type="button"
                      className="ml-auto border-none rounded-full btn btn-secondary "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
