"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import { userReviewData } from "@/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientCard from "./ClientCard";

const ClientReview = () => {
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 3000, min: 1324 },
    //   items: 5,
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          title_1="Our Client"
          title_2="Reviews"
          description="This is just for asthetic purposes enjoy!🙂"
        />
        <div className="mt-14">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={true}
          >
            {userReviewData.map((user) => {
              return <ClientCard key={user.id} {...user} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
