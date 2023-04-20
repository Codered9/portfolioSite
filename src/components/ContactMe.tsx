import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";
const ContactMe = () => {
  return (
    <div className="h-[93vh] pt-24 px-24" id="contactme">
      <h2 className="text-4xl"><span className='text-br-red font-black'>$</span>Contact Me</h2>
      <InlineWidget url="https://calendly.com/sudhanshusri23" styles={{height: '720px'}}/>
    </div>
          
  );
};

export default ContactMe;
