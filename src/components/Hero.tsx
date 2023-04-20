import React from "react";

const Hero = () => {
  return (
    <div className=" h-full md:h-[93vh] flex justify-center pt-12 md:pt-24" id="#">
      <div className="flex flex-col md:flex-row my-auto">
        <div className=" m-4 md:m-8  md:mr-12">
          <img src="/SudPic.png" className="w-64 md:w-auto mx-auto" />
        </div>

        <div className="my-auto  m-8 ml-12">
          <p className="text-xl md:text-3xl">
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
