import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import contactimg from '../../assets/images/contact.webp'
import { Link } from 'react-router-dom';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactimg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Auction Team.</h3>
        <p className="text-lg font-normal text-gray-400">
        We're here to help you. 
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        If you want to inquire about something or inquire about a product, leave us a message and we will respond immediately hopefully.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+20 1025946540.</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">Acution@gmail.com.</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <Link to=""><FaFacebookF /></Link>
          </span>
          <span className="bannerIcon">
          <Link to=""><FaTwitter /></Link>
          </span>
          <span className="bannerIcon">
          <Link to=""><FaLinkedinIn /></Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft