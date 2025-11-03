"use client";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import BlogCard from "../blog_card";

interface propTypes {
  classes?: any;
}

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
];

const BlogSection = ({ classes }: propTypes) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;
  return (
    <section className={`${classes?.root ? classes?.root : ""}`}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_450px] items-center mb-6 lg:mb-12">
          <h3 className="heading-two">Latest Posts</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[30px]">
          {blogData?.slice(0, 3)?.map((item: any, i: number) => {
            return <BlogCard item={item} key={i} classes={{ root: "gap-3" }} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
