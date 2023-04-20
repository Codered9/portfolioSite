import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";
const ContactMe = () => {
  return (
    <div className="md:min-h-[93vh] pt-12 md:pt-24 px-8 md:px-24 " id="contactme">
      <h2 className="text-4xl"><span className='text-br-red font-black'>$</span>Contact Me</h2>
      <div className="flex md:hidden mt-2">
      <InlineWidget url="https://calendly.com/sudhanshusri23" styles={{height: '380px', width: '100%'}}/>
      </div>
      <div className="hidden md:flex">
      <InlineWidget url="https://calendly.com/sudhanshusri23" styles={{height: '720px', width: '100%'}}/>
      </div>
    </div>
          
  );
};

export default ContactMe;
