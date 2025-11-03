"use client";
import Slider from "react-slick";
import TestimonialCard from "../testimonial_card";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

interface propTypes {
  classes?: any;
  data?: any;
}
const data = [
  {
    id: 1,
    name: "Abdul Razzak",
    country: "USA",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    message:
      "I feel incredibly honored to be able to contribute to Al Amin Foundation has. Knowing that my donations are making a tangible difference in the lives of those in need brings me immense joy and fulfillment.",
  },
  {
    id: 2,
    name: "Faizan Rafiq",
    country: "USA",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    message:
      "Supporting Al Amin Foundation has become a meaningful part of my life. Seeing the impact of my contributions firsthand has strengthened my belief in the power of collective giving to create positive change in the world.",
  },
  {
    id: 3,
    name: "Ali Ahmad Qureshi",
    country: "USA",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    message:
      "I chose to donate to Al Amin Foundation has because I believe in their mission and values. Their dedication to transparency and accountability ensures that every dollar is used efficiently to maximize its impact on the communities they serve.",
  },
  {
    id: 4,
    name: "Kabir Ahmmed",
    country: "USA",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    message:
      "I've been supporting Al Amin Foundation for years, and I continue to be impressed by their innovative approach to addressing complex social issues. It's incredibly rewarding to see the lasting impact of my donations on the lives of individuals and families.",
  },
];
const Testimonials = ({ classes }: propTypes) => {
  const limit = 10;

  const total = data?.length;

  const [isActive, setIsActive] = useState(0);

  const wrapperRef = useRef(null);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsActive(0);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const nexHandle = () => {
    setIsActive(1);
  };
  const prevHandle = () => {
    setIsActive(2);
  };

  interface dataTypes {
    className?: string;
    style?: string;
    onClick?: Function | any;
  }

  function NextArrow(props: dataTypes) {
    const { className, onClick } = props;

    return (
      <div
        onClick={() => {
          onClick();
          nexHandle();
        }}
        className={`${className} ${
          isActive === 1 ? `arrow_active` : ``
        } believe_innovation_slider_arrow believe_innovation_slider_arrow_next work_arrow`}
      >
        {/* <span className="pointer-events-none inline-block w-[6px] h-[6px] rounded-full absolute left-[-10px] bg-body country_custom_arrow"></span> */}
        <FiArrowRight />
      </div>
    );
  }

  function PrevArrow(props: dataTypes) {
    const { className, onClick } = props;
    return (
      <div
        onClick={() => {
          onClick();
          prevHandle();
        }}
        className={`${className} ${
          isActive === 2 ? `arrow_active` : ``
        } believe_innovation_slider_arrow  believe_innovation_slider_arrow_prev work_arrow`}
      >
        <FiArrowLeft />
      </div>
    );
  }

  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "believe_innovation",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <>
      {total > 0 ? (
        <section
          className={`pt-8 lg:pt-[70px] pb-2 lg:pb-[90px] bg-grey overflow-hidden ${
            classes?.root ? classes?.root : ""
          }`}
        >
          <div className="px-5 mb-4">
            <h2 className="text-center">WHAT DONORS SAY ABOUT OUR WORK</h2>
          </div>
          <div>
            <Slider {...settings}>
              {data?.map((item: any, i: any) => {
                return (
                  <TestimonialCard
                    key={i}
                    classes={{ root: "mx-3 lg:m-[15px] p-5 lg:p-[50px]" }}
                    data={item}
                  />
                );
              })}
            </Slider>
          </div>

          {total > limit && (
            <div className="flex justify-center">
              <Link href="/testimonials" className="btn btn-grey ">
                View All
              </Link>
            </div>
          )}
        </section>
      ) : null}
    </>
  );
};

export default Testimonials;
