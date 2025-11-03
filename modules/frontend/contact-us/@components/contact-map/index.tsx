import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const ContactMap = () => {
  return (
    <section className="contact-map pt-[20px] lg:pt-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-0">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5330020480974!2d-73.97816808816209!3d40.64017977128532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b2c2031560d%3A0x3b1ffd13b13e5103!2s491%20E%204th%20St%2C%20Brooklyn%2C%20NY%2011218%2C%20USA!5e0!3m2!1sen!2sbd!4v1711272650520!5m2!1sen!2sbd"
            width="100%"
            height="690"
            className="lg:h-[690px] h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="location">
          <div className="container grid items-center justify-center h-full grid-cols-1 lg:grid-cols-1 contact_us">
            <div></div>
            <div className="address shadow-[0_0px_40px_-0px_rgba(0,0,0,0.1)]  rounded-md dark:bg-neutral-800">
              <h3>
                Our <span className="marked"> Office Address</span>{" "}
              </h3>
              <div className="flex flex-col gap-[20px] my-[40px] text-base text-[#113759]">
                <div className="flex items-start gap-[22px]">
                  <div className="dark:text-white">
                    <MdLocationOn className="shrink-0	text-lg mt-1" />
                  </div>
                  <div>
                    <p className="w-[187px] dark:text-white mb-0">
                      491 E 4th St, Brooklyn, NY 11218
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[22px]">
                  <div className="dark:text-white">
                    <BiPhoneCall />
                  </div>
                  <div>
                    <a href="tel:+8801818193628" className="w-[187px] ">
                      +8801818193628
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-[22px]">
                  <div className="dark:text-white">
                    <HiOutlineMail />
                  </div>
                  <div>
                    <p className="w-[187px] mb-0">info@alaminfoundation.com</p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/2DdSUwmLQz3aLkiL7"
                target="_blank"
                rel="nofollow"
              >
                <button className="rounded-full cursor-pointer btn btn-primary lg:w-full">
                  View on Google Maps
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
