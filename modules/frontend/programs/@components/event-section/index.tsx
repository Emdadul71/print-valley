"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/modules/frontend/@components/event_card";
import { useGetPublicEventByProgramQuery } from "@/appstore/event/event_api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/frontend/@components/skeleton";

interface propTypes {
  classes?: object | any;
  showItem?: number;
  slug?: any;
  isRecent?: boolean;
  title?: string;
}

const programsData = [
  {
    title: "Food Distribution to Orphan",
    date: "01/01/2024",
    duration: "1 Months",
    location: "Bangladesh",
    featureImage: "/misc/program-one.jpg",
  },
  {
    title: "Food Distribution to Orphan",
    date: "01/01/2024",
    duration: "1 Months",
    location: "Bangladesh",
    featureImage: "/misc/orphan.jpg",
  },
  {
    title: "Food Distribution to Orphan",
    date: "01/01/2024",
    duration: "1 Months",
    location: "Bangladesh",
    featureImage: "/misc/orphan.jpg",
  },
  {
    title: "Food Distribution to Orphan",
    date: "01/01/2024",
    duration: "1 Months",
    location: "Bangladesh",
    featureImage: "/misc/orphan.jpg",
  },
];

const EventSection = ({ classes, title, slug }: propTypes) => {
  const limit = 6;
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState<any>([]);

  const queryParams = {
    programSlug: slug,
  };
  const queryString = generateQueryString(queryParams);
  const { data: eventList, isLoading } =
    useGetPublicEventByProgramQuery(queryString);

  const dataArr = eventList?.results;

  const count = eventList && eventList?.results?.length;

  // const dataArray = eventList?.data;
  // const handleLoadMore = () => {
  //   setPage((prev) => prev + 1);
  // };

  // useEffect(() => {
  //   if (moreData && moreData.length > 0) {
  //     setMoreData((prev: any) => [...prev, ...dataArray]);
  //   } else {
  //     setMoreData(dataArray);
  //   }
  // }, [dataArray]);
  return (
    <section className={`pt-5 mb-8   ${classes?.root ? classes?.root : ""}`}>
      <div className="container">
        {dataArr && dataArr.length > 0 && (
          <div className="max-w-[700px] mx-auto mb-10">
            <h2 className="text-center text-secondary">{title} </h2>
          </div>
        )}
        <div className={`max-w-[1170px] w-full mx-auto`}>
          {!isLoading ? (
            <>
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]`}
              >
                {dataArr?.map((item: any, i: number) => {
                  return <EventCard item={item} key={i} slug={slug} />;
                })}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              <Skeleton className="w-full lg:w-[370px]" height={378} />
              <Skeleton className="w-full lg:w-[370px]" height={378} />
              <Skeleton className="w-full lg:w-[370px]" height={378} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
