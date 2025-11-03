"use client";
import reviewsData from "@/helpers/data/reviews.json";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Slider = dynamic(() => import("react-slick"), {
  loading: () => <>Loading</>,
});

interface dataTypes {
  className?: string;
  style?: string;
  onClick?: Function | any;
}

const Reviews = () => {
  function NextArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
      <FiChevronRight
        className={`${className} slider_arrow_next`}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
      <FiChevronLeft
        className={`${className} slider_arrow_prev`}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pt-8 lg:pt-[60px] mb-8 lg:mb-[70px]">
      <div className="container">
        <div className="max-w-[550px] w-full mx-auto text-center mb-8 lg:mb-[60px]">
          <h2 className="mb-3">{"Donor's"} Reviews</h2>
          <p className="text-primary">{reviewsData?.shortDescription}</p>
        </div>

        <Slider {...settings}>
          {reviewsData?.data &&
            reviewsData?.data.map((item: any, i: any) => {
              return (
                <div className=" px-[15px]" key={i}>
                  <div className="border p-[30px]">
                    <Image
                      src="/misc/quote.webp"
                      alt="quote"
                      title="quote"
                      width={40}
                      height={40}
                      className="mb-5"
                    />
                    <div
                      title={item?.description}
                      className="text-gray mb-4 line-clamp-4"
                    >
                      {item?.description}
                    </div>
                    <div className="stars text-secondary flex items-center gap-1 mb-2">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <div
                      title={item?.name}
                      className="text-xl font-medium line-clamp-1"
                    >
                      {item?.name}
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
