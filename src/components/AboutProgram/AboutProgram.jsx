import React from "react";
import hoody from "../../assets/body/hoody-man.jfif";

const AboutProgram = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col container box-contain mx-auto">
        <div className="border-collapse w-[300vw]">
          <img src={hoody} alt="hoody-image" className="w-full" />
        </div>
        <div className="pl-10 break-words py-10">
          <h1 className="text-4xl font-bold uppercase">Our Program</h1>
          <h5 className="text-lg font-[cursive] py-5">
            Why sir end believe encivil respect. Always get adieus nature day
            course for common. My little garret repair to desire he esteem.
          </h5>
          <p>
            Wise busy past both park when an ye no . Nay likely her length
            sooner thrown sex lively income. The expense windows adapted sir .
            Wrong widen drawn ample eat off doors money. Offending belonging
            promotion provision an be oh consulted ourselves it . Blessing
            welcomed ladyship she met humoured sir breeding her. Six curiosity
            day assurance bed necessary . And produce say the ten moments
            parties.Simple innate summer fat appear basket his desire joy.
            Outward clothes promise at gravity do excited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProgram;
