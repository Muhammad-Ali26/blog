import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#222020] sm:py-16 py-8">
        <div className="w-4/5 mx-auto grid lg:grid-cols-2 gap-x-20 gap-y-8">
          <div className="space-y-6">
            <h3 className="font-bold xl:text-5xl sm:text-4xl text-3xl text-white">
              Get in touch with us for your service
            </h3>
            <div className="flex items-center gap-x-3 text-white">
              <button>
                <FaFacebook size={24} />
              </button>
              <button>
                <BsTwitter size={24} />
              </button>
              <button>
                <BsInstagram size={24} />
              </button>
              <button>
                <BsLinkedin size={24} />
              </button>
            </div>
          </div>
          <div className="space-y-5 text-white">
            <div className="space-y-1">
              <div className="font-semibold sm:text-lg text-base">
                Help line Number
              </div>
              <h6 className="font-semibold sm:text-2xl text-lg">
                1800 265 24 52
              </h6>
            </div>
            <div className="space-y-1">
              <div className="font-semibold sm:text-lg text-base">Address</div>
              <h6 className="font-semibold sm:text-2xl text-lg">
                NH 234 Public Square San Francisco 65368
              </h6>
            </div>
            <div className="space-y-1">
              <div className="font-semibold sm:text-lg text-base">
                We are open
              </div>
              <h6 className="font-semibold sm:text-2xl text-lg">
                Monday to Friday 9:00 AM to 10:00 AM
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-theme-black">
        <div className="w-4/5 mx-auto lg:py-6 py-2 flex lg:flex-row flex-col justify-between items-center gap-y-2 relative">
          <Link to="/">
            <img src="/images/logo-white.png" alt="logo" className="w-28" />
          </Link>
          <div>
            <ul
              className={`flex gap-5 flex-row items-center justify-end [&>li]:text-white [&>li]:font-semibold [&>li]:text-sm`}
            >
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="font-semibold text-base text-[#939191]">
            &copy; Copyright Finsweet 2021
          </div>
        </div>
      </div>
    </footer>
  );
}
