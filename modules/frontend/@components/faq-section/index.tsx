import React from "react";
import Faq from "../faq";

interface propTypes {
  data?: any;
  title: string;
  classes?: {
    root?: any;
  };
}

const FeqSection = ({ data, title, classes }: propTypes) => {
  return (
    <>
      {data?.faq?.length > 0 ? (
        <section className={`${classes?.root ? classes.root : ""}`}>
          <div className="container">
            <h3 className="heading-two text-center mb-10">{title}</h3>
            <div className="max-w-[1070px] w-full mx-auto">
              <Faq data={data} />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default FeqSection;
