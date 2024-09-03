import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
import Swal from 'sweetalert2'

const Newsletter = () => {

  const handleSubmit = async() => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL"
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  }

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-cnter gap-2">
          <FaEnvelopeOpenText />
          E-Mail us for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
        Looking for your next opportunity? E-Mail us for job listings tailored to your skills. Connect with potential employers and get one step closer to your dream job!
        </p>
        <div className="w-full space-y-4"></div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@mail.com"
          className="w-full block py-2 pl-3 border focus:outline-none"
        />
        <button className = "w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold">Subscribe</button> 
      </div>

      {/* 2nd part */}
      <div className="mt-24">
        <h3 className="text-lg font-bold mb-2 flex items-cnter gap-2">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
        Stand out from the crowd with our 'Get Noticed Faster' option! Highlight your profile to top employers and increase your chances of landing your dream job. Boost your visibility and be the first to get noticed!
        </p>
        <div className="w-full space-y-4"></div>
        <button className = "w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"  onClick={handleSubmit}>Upload your resume</button> 
      </div>
    </div>
  );
};

export default Newsletter;
