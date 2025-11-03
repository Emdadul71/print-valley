import Link from "next/link";
import React from "react";

const DonationHero = () => {
  return (
    <section className="pt-5 lg:py-[150px] bg-grey mb-[80px]">
      <div className="container">
        <div>
          <h1 className="mb-3 text-secondary text-center">Donation</h1>
          <div className="flex justify-center gap-2 text-center ">
            <Link href="/" className=" hover:text-secondary">
              Home
            </Link>{" "}
            / <span>Donation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationHero;
