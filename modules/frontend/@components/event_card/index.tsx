import Image from "next/image";
import Link from "next/link";
// import moment from "moment";
import moment from "moment";
import { GiDuration } from "react-icons/gi";
// import { staticAsset } from "@/helpers/utils";

export const EventCard = ({ item, slug }: any) => {
  console.log("item", item);

  return (
    <Link
      scroll={false}
      href={`/programs/${slug}/${item?.slug}`}
      className="hover:text-inherit border border-greylight rounded-md overflow-hidden hover:shadow-md bg-[#FFFFFF] "
    >
      <div className="h-[220px] relative">
        <img
          crossOrigin="anonymous"
          src={item?.thumbImageSrc || "/misc/placeholder-blog.webp"}
          alt={item?.title}
          width={500}
          height={220}
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0"></div>
        {/* <div className="w-full h-full program-overlay absolute top-0 left-0"></div> */}
      </div>
      <div className="px-4 lg:px-6 pt-4 pb-6 bg-white">
        <div>
          <div>
            <h5 className="mb-2 hover:text-secondary transition-all text-lg line-clamp-2">
              {item?.title}
            </h5>
            <ul className="grid grid-cols-[1.5fr_1fr] lg:grid-cols-[2fr_1fr] items-center gap-2">
              <li className="grid grid-cols-[20px_1fr] gap-2">
                <Image
                  src="/misc/clock.png"
                  alt="Event time"
                  width={20}
                  height={20}
                />
                <span className="">
                  {moment(item?.date).format("Do MMMM, YYYY")}
                </span>
              </li>
              <li className="grid grid-cols-[20px_1fr] items-center gap-2">
                <GiDuration className="text-lg text-secondary" />
                <span className="">1 Month</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-2">
                <Image
                  src="/misc/location.png"
                  alt="Event time"
                  width={20}
                  height={20}
                />
                <span className="text-sm">{item?.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
