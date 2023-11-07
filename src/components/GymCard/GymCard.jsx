import React from "react";
import gymGuy from "../../assets/images/walkerMan.jfif";

const GymCard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 font-sans ">
        <div className="card w-96 bg-base-100 shadow-xl image-full hover:scale-110 transition duration-500 hover:skew-y-6 md:transform-none  transform-gpu preserve-3d ">
          <figure>
            <img src={gymGuy} alt="guy" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        {/*<div className="card hover:scale-110 transition duration-500">
  <img src={gymGuy} alt="Image" className="w-full h-full object-cover rounded-lg">
  <div className="card-content p-4">
    <h2 className="text-lg font-bold">Card Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus enim id ipsum tempor, et hendrerit lorem semper. Sed ut sem et enim tincidunt finibus. Sed elementum tristique eros, eget vulputate eros ultricies nec.</p>
  </div>
</div>*/}
      </div>
    </div>
  );
};

export default GymCard;
