import Image from "next/image";
import BlogSection from "../@components/blog_section";
import Counter from "../@components/counter";
import DonationRequestForm from "../@components/donation-form";
import Register from "../@components/register";
import Reviews from "../@components/reviews";
import Services from "../@components/services";
import Testimonials from "../@components/testimonials";
import AboutFoundation2 from "./@components/about-foundation2";
import HomeHeroTwo from "./@components/home-hero-two";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* <HomeHero /> */}
      <HomeHeroTwo />
      {/* <HomeHeroCarousel /> */}
      <AboutFoundation2 />
      <Counter />
      <Services />

      <DonationRequestForm />
      {/* <BlogSection classes={{ root: "pt-5 lg:pt-[80px]" }} /> */}
      <Reviews />
      {/* <Testimonials classes={{ root: "mb-5 lg:mb-[80px]" }} /> */}
      <Register />
    </>
  );
};

export default Home;
