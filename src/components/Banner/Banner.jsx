import React from "react";
import dumbleMan from "../../assets/banner/dumble-man.png";
//import bannerCircleOne from "../../assets/banner/banner-circle-one.png";

const Banner = () => {
  return (
    <section>
      <div
        className="hero lg:h-[92vh] h-[70vh] bg-gradient-to-r from-red-400 via-red-400 to-red-600 bg-transparent bg-clip-bg"
        style={{
          backgroundImage: `url(${dumbleMan})`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          width: "600px",
          rotate: "revert",
        }}
      >
        <div className="mx-auto">
          <div className="absolute flex justify-end transform -translate-y-1/3 left-30 top-1/2 bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-600 text-transparent bg-clip-text right-1/2">
            <div className="max-w-md px-5 lg:px-0 ">
              <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                Make Your Body Fit and healthy!
              </h1>
              {/*<Link to="/classes">*/}
              <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer text-white">
                Enroll Now
              </button>
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
