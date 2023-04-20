import React from "react";

const Hero = () => {
  return (
    <div className=" h-[93vh] flex justify-center pt-24" id="#">
      <div className="flex flex-row my-auto">
        <div className=" m-8 mr-12">
          <img src="/SudPic.png" className="" />
        </div>

        <div className="my-auto  m-8 ml-12">
          <p className="text-3xl">
            I am a \ <br />
            Web Developer \<br />
            Cyber Security Student \<br />
            Blockchain Beginner \<br />
            Professional Procastinator \<br />( P.s. this site is THE PROOF)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
