import BlogCard from "@/modules/frontend/@components/blog_card";
import React from "react";

const blogData = [
  {
    slug: "",
    featureImage: "/misc/blog-card.webp",
    publishedAt: "January 10, 2024",
    title:
      "Elon Musk Expands SpaceX Facility in Texas With Controversial Land Swap Deal",
    content:
      "The Texas Parks and Wildlife Commission authorized a land swap deal with SpaceX, granting Elon Musk’s rocket company 43 acres of land that were heavily sought after as part of conservation efforts in the area. The TPWD put the deal to a vote during a meeting in Austin, where most speakers opposed the land exchange, according to The Texas Tribune. “This land is our ancestral land. These were lands that were fishing areas for my people,” Juan Mancias, the Tribal Chair of the Esto’k Gna Tribal Nation of Texas, is quoted in The Texas Tribune as saying. “If you are looking at us as if we don’t exist, we are here.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-3.webp",

    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-3.webp",

    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-3.webp",

    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-3.webp",

    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
];
const LatestBlog = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-[40px]">
        <h2 className="h3 mb-0 text-primary">Latest Blogs</h2>
        <p className="mb-0">View All</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-5">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-[30px]">
          {blogData?.map((item: any, i: any) => {
            const isSmall = i == 2 || i == 3 || i == 4 || i == 5;
            const isTrue = i == 0 || i == 1;
            return (
              <>
                <BlogCard
                  key={i}
                  item={item}
                  classes={{
                    root: `${
                      i > 5
                        ? `lg:grid-cols-[410px_1fr] lg:col-span-2 items-center gap-5`
                        : `gap-3`
                    } ${
                      isSmall
                        ? `lg:grid-cols-[146px_1fr] col-span-1 gap-3 items-center `
                        : ``
                    }`,

                    imageWrapper: isSmall ? "!h-full" : "",
                    author: isSmall ? "!mb-1" : "",
                    imageStyle: isSmall ? "!h-full" : "",
                    title: isSmall ? "!text-sm !mb-1" : "!text-2xl",
                    reading: isSmall ? "!text-xs" : "",
                    description: isSmall
                      ? "!hidden"
                      : isTrue
                      ? "!line-clamp-2"
                      : "",
                  }}
                />
                {i == 5 && <div className="h-[20px]"></div>}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
