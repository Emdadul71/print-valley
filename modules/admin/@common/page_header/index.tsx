import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  breadcrumbsData?: {
    title?: string;
    link?: string;
  }[];
  title: string;
  btnTitle?: string;
  btnLink?: string;
  setKeyword?: any;
  extraLeftSide?: any;
  extraRightSide?: any;
  hasModal?: boolean;
  handleModal?: () => void;
}

const PageHeader = ({
  breadcrumbsData,
  title = "",
  btnTitle,
  btnLink,
  setKeyword,
  extraLeftSide,
  extraRightSide,
  hasModal,
  handleModal,
}: Props) => {
  return (
    <div className="border-b pb-3 bg-white sticky top-[56px] z-20">
      {breadcrumbsData && breadcrumbsData?.length > 0 ? (
        <div className="flex items-center gap-2 pt-3 mb-3 ">
          {breadcrumbsData?.map((item: any, i: number) => {
            if (item?.link) {
              return (
                <Link
                  key={i}
                  href={item?.link || "#"}
                  className="flex items-center gap-1 transition-all font-medium"
                >
                  <span>{item?.title}</span>
                  <FiChevronRight />
                </Link>
              );
            } else {
              return (
                <p key={i} className="mb-0 font-medium text-secondary w-full">
                  {item?.title}
                </p>
              );
            }
          })}
        </div>
      ) : null}

      <div className="grid grid-cols-[1fr_1fr] gap-5 items-center">
        <div className="flex items-center gap-3">
          <h3 className="text-[#093A5D] font-bold mb-0">{title}</h3>
          {extraLeftSide ? extraLeftSide : null}
        </div>

        <div className="flex justify-end items-center ml-auto gap-3 w-full">
          <div
            className={clsx(
              setKeyword && btnTitle
                ? "grid grid-cols-1 items-center gap-3"
                : "flex items-center justify-end"
            )}
          >
            {hasModal && btnTitle ? (
              <button
                onClick={handleModal}
                className="btn btn-primary uppercase"
              >
                {btnTitle}
              </button>
            ) : (
              btnLink && (
                <Link
                  href={btnLink || "#"}
                  className="btn btn-primary uppercase"
                >
                  {btnTitle}
                </Link>
              )
            )}
          </div>
          {extraRightSide ? extraRightSide : null}
        </div>
      </div>
      {/* <Line /> */}
    </div>
  );
};

export default PageHeader;
