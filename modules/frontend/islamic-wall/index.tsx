import React from "react";
import BlogHero from "./@comments/blog-hero";
import LatestBlog from "./@comments/latest-blog";

const IslamicWall = () => {
  return (
    <>
      <BlogHero />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[30px]">
            <LatestBlog />
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IslamicWall;
