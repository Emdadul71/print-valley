import BlogCard from "@/modules/frontend/@components/blog_card";
import React from "react";

const blogData = [
  {
    slug: "#",
    featureImage: "/misc/blog-card.webp",
    publishedAt: "January 10, 2024",
    title:
      "Elon Musk Expands SpaceX Facility in Texas With Controversial Land Swap Deal",
    content:
      "The Texas Parks and Wildlife Commission authorized a land swap deal with SpaceX, granting Elon Musk’s rocket company 43 acres of land that were heavily sought after as part of conservation efforts in the area. The TPWD put the deal to a vote during a meeting in Austin, where most speakers opposed the land exchange, according to The Texas Tribune. “This land is our ancestral land. These were lands that were fishing areas for my people,” Juan Mancias, the Tribal Chair of the Esto’k Gna Tribal Nation of Texas, is quoted in The Texas Tribune as saying. “If you are looking at us as if we don’t exist, we are here.",
  },
  {
    slug: "#",
    featureImage: "/misc/blog-card-3.webp",

    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "#",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
  {
    slug: "#",
    featureImage: "/misc/blog-card-3.webp",

    publishedAt: "January 10, 2024",
    title:
      "NASA Investigating Issue With Orion Hatch Ahead of Crewed Moon Mission",
    content:
      "Four astronauts are scheduled to ride on board the Orion spacecraft in September 2025 for NASA’s first crewed mission to the Moon in more than 50 years. But before the Artemis crew can strap into Orion, the space agency still needs to resolve an issue with the spacecraft’s side hatch that could prevent the astronauts from exiting in case of an emergency.",
  },
  {
    slug: "#",
    featureImage: "/misc/blog-card-2.webp",
    publishedAt: "January 10, 2024",
    title: "Could Blue Origin Actually Beat SpaceX to the Moon?",
    content:
      "Blue Origin, the aerospace company founded by Jeff Bezos, is finally setting some ambitious timelines, saying it plans to conduct an uncrewed Moon landing in as little as a year from now, deploying a demonstration version of its Blue Moon Mark 1 (MK1) cargo lander. This ramps up the space rivalry big",
  },
];
const BlogHero = () => {
  return (
    <section className="pt-5 lg:pt-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px]">
          {blogData?.map((item: any, i: any) => {
            const isSecond = i == 1;
            return (
              <BlogCard
                key={i}
                item={item}
                classes={{
                  root: `!grid-cols-1 gap-4 ${
                    isSecond ? "lg:!col-span-2 lg:!row-span-2 self-start" : ""
                  }`,
                  title: isSecond ? "!text-2xl" : "",
                  description: isSecond ? "!line-clamp-4" : "lg:!hidden",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
