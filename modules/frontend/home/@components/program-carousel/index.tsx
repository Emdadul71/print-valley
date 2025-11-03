"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import CountryCard from "@/modules/frontend/@components/country_card";

const dataLocal = [
  {
    title: "Australia",
    imgSrc: "/images/country/australia-country.webp",
    url: "/country/study-in-australia",
    hoverBackground:
      "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  },
  {
    title: "Canada",
    imgSrc: "/images/country/canada-country.webp",
    url: "/country/study-in-canada",
    hoverBackground:
      "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  },
  {
    title: "Denmark",
    imgSrc: "/images/country/denmark-country.jpg",
    url: "/country/study-in-denmark",
    hoverBackground:
      "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  },
  {
    title: "Germany",
    imgSrc: "/images/country/germany-country.webp",
    url: "/country/study-in-germany",
    hoverBackground:
      "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  },
  {
    title: "Ireland",
    imgSrc: "/images/country/ireland-country.webp",
    url: "/country/study-in-ireland",
    hoverBackground:
      "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  },
  {
    title: "Japan",
    imgSrc: "/images/country/japan-country.webp",
    url: "/country/study-in-japan",
    hoverBackground:
      "linear-gradient(180deg, rgba(252, 106, 49, 0) 38.5%, #FC6A31 100%)",
  },
  {
    title: "The USA",
    imgSrc: "/images/country/usa-country.webp",
    url: "country/study-in-the-usa",
    hoverBackground:
      "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  },
  {
    title: "The UK",
    imgSrc: "/images/country/uk-country.webp",
    url: "/country/study-in-the-uk",
    hoverBackground:
      "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  },
];

const ProgramCaresoul = () => {
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
        <HiOutlineArrowSmRight />
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
        <HiOutlineArrowSmLeft className="text-paragraph" />
      </div>
    );
  }

  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
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
          dots: true,
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
    <section className="overflow-hidden">
      <div className="container ">
        <div className="max-w-[810px] mb-[-48px] lg:mb-[-70px]">
          <h2 className="">Study in Top Higher Education Destinations</h2>
        </div>
        <div className="lg:mr-[-26vw] overflow-hidden pt-[60px] mt-10">
          <Slider {...settings}>
            {dataLocal.map((item, i) => {
              return (
                <CountryCard
                  data={item}
                  key={i}
                  classes={{ root: "mx-2 lg:m-4" }}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProgramCaresoul;
