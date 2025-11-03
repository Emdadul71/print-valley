"use client";
import { excerpt } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMapPin, HiOutlinePrinter } from "react-icons/hi2";
import TextExpander from "../../@components/text-expander";

const footerText = `Al Amin Foundation empowers global communities through education, healthcare, and sustainability initiatives, fostering positive change for a brighter, equitable future. With a focus on collaboration and innovation, we address pressing challenges to create lasting impact, ensuring every individual has the opportunity to thrive and contribute meaningfully to society's advancement.`;

const Footer = () => {
  // const init = 150;
  // const [count, setCount] = useState(init);
  // const about = excerpt(footerText, count);
  // const handleMore = () => {
  //   setCount(10000);
  // };

  return (
    <section className="mt-auto bg-[#1D1D1B] pb-0">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.8fr] items-center gap-8 lg:gap-[120px] py-5 lg:pb-[50px] pt-8 lg:pt-[120px]">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/misc/footer-logo-al.png"
                width={200}
                height={28}
                alt="logo"
              />
            </Link>

            {/* <div className=" text-grey mb-8">
              <TextExpander text={footerText} />
            </div> */}
            <ul className="flex flex-col gap-2">
              {/* <li>
                <a
                  href="tel:+1 (639) 316-4943
                  "
                  className="inline-flex items-center gap-2 group"
                >
                  <FiPhoneCall className="text-white group-hover:text-hover transition-all text-xl" />
                  <span className="text-white group-hover:text-hover transition-all text-sm">
                    +1 (639) 316-4943
                  </span>
                </a>
              </li> */}
              <li>
                <a
                  href="mailto:support@immilink.ca"
                  className="inline-flex items-center gap-2 group"
                >
                  <FaRegEnvelope className="text-white group-hover:text-hover transition-all text-xl" />
                  <span className="text-white group-hover:text-hover transition-all text-sm">
                    support@alaminfoundation.org
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <HiOutlineMapPin className="text-white text-xl" />
                  <span className="text-white text-sm">New York, USA</span>
                </div>
              </li>
              {/* <li>
                <div className="flex items-center gap-2">
                  <HiOutlinePrinter className="text-white text-xl" />
                  <span className="text-white text-sm">+1-212-9876543</span>
                </div>
              </li> */}
            </ul>
          </div>

          <div className="mt-[28px]">
            {/* <div>
              <p className="font-bold text-white">About</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    In Press
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Affiliate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">Service Providers</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Immigration{" "}
                    <span className="block">Consultants (RCIC)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Insurance Agents
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Insurance Agents
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Lawyers & Legal Aids
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Financial Advisors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">FAQ</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Language
                  </Link>
                </li>
              </ul>
            </div> */}
            <TextExpander text={footerText} />
          </div>
        </div>
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-2 lg:gap-[120px] pb-5 lg:pb-12 items-center">
          <div className="order-1 lg:order-0 ">
            <p className="text-white text-sm text-center lg:text-start mb-0">
              © 2024, All Rights Reserved
            </p>
          </div>
          <ul className="flex gap-2 lg:gap-0 justify-center lg:justify-between flex-wrap lg:order-1">
            <li>
              <Link href="/about-us" className="text-white text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-white text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-condition" className="text-white text-sm">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-white text-sm">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white text-sm">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-white text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
