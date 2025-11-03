import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
interface propTypes {
  title?: string;
  isLink?: boolean;
  className?: string;
  url?: any;
}
const ViewLink = ({ title, url, isLink, className }: propTypes) => {
  return (
    <Link
      href={url}
      className={`group w-[130px] h-[130px] rounded-full flex items-center justify-center gap-2 border p-5 cursor-pointer hover:bg-secondary hover:text-white hover:border-secondary transition-all ${
        className ? className : ""
      }`}
    >
      <span className="text-center">{title}</span>
      <FiArrowUpRight className="shrink-0 text-lg" />
    </Link>
  );
};

export default ViewLink;
