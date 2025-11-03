import { MdLocationOn } from "react-icons/md";
import styles from "./country_card.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { staticAsset } from "@/helpers/utils";

interface propTypes {
  data?: any;
  classes?: {
    root?: string;
    overlay?: string;
  };
}

const CountryCard = ({ data, classes }: propTypes) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={data?.url}
      className={`${
        styles.card
      } relative flex flex-col rounded-lg overflow-hidden ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div>
        <Image
          src={`${staticAsset(data?.imgSrc)}`}
          alt={data?.title}
          width={350}
          height={400}
          blurDataURL="/images/country/uk.webp"
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`absolute z-10 w-full h-full left-0 top-0 ${styles.gradient}`}
        style={{
          background: isHovered ? data?.hoverBackground : "",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute bottom-[30px] left-[30px] text-white">
          <Image
            src={staticAsset("/images/icons/country-pin.png")}
            alt="map pin"
            width={28}
            height={28}
            className={`mb-2 ${styles.map_pin}`}
          />
          <span className="block uppercase font-bold mb-[2px]">Study in</span>
          <span className="block heading-four">{data?.title}</span>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
