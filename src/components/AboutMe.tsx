import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-[93vh] pt-24 px-24 " id="aboutme">
      <div>
        <h2 className="text-4xl"><span className='text-br-red font-black'>$</span>About Me</h2>

        <div className="text-xl md:text-2xl mx-auto mt-8 md:mt-24 max-w-5xl flex flex-col gap-8 text-justify md:text-left">
          <p className="">
            Hi, I am Sudhanshu Srivastava. I fell in love with computers in a
            very early age of life. Grew up breaking them, then fixing them and
            finally breaking them again.
          </p>
            <p>
              Joined college with the goal of getting a career in Cyber
              Security. So started Front-end development for college clubs, then
              started doing CEH for knowledge in Cyber Sec (still doing 😢). And
              now learning backend development.
            </p>
            <p>
              Know blockchain basics, DevOps and whatever you want to throw at
              me, I WILL LEARN.
            </p>
            <p>
              And if you still don’t know yet, I am really lazy and a serious
              procastinator.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
