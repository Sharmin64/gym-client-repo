import React from "react";
//import dumbleMan from "../../assets/banner/gym-banner.jpg";
import HoverCarousel from "hover-carousel";
//import bannerCircleOne from "../../assets/banner/banner-circle-one.png";

const Banner = () => {
  const images = [
    "https://i.ibb.co/D7RsMvK/bannar-1.jpg",
    "https://i.ibb.co/WKF4TdQ/banner-2.jpg",
    "https://i.ibb.co/h8nzwB2/banner-4.jpg",
    "https://i.ibb.co/DL7bTxH/banner-8.jpg",
    "https://i.ibb.co/SNNbt90/gym-banner.jpg",
    "https://i.ibb.co/FhYkv50/banner-7.jpg",
  ];
  return (
    <section className=" z-10">
      <div className=" relative top-16 w-screen z-10">
        <h1 className="text-5xl h-[70vh] mt-28 text-center pt-10 uppercase bg-[#c5b9cd] text-[#111111]">
          Work Hard to Get Better Life
        </h1>
        <div className="h-auto absolute bottom-16">
          <HoverCarousel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
