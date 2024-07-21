"use client";
import * as React from "react";
import Link from "next/link";

interface navProp {
  title: string;
}

const CustomnavLink = ({ title }: navProp) => {
  return (
    <Link href={`#${title.toLocaleLowerCase()}`} className=" text-lg">
      {title}
    </Link>
  );
};

const Navbar = () => {
  return (
    <>
      <header className=" sticky top-6 shadow-2xl flex items-center justify-around h-[92px] bg-white rounded-2xl mx-12 z-10">
        <div className=" inline-flex items-center">
          <img src="company-logo.png" alt="logo" className=" h-14" />
          <div className=" flex-initial p-2 text-sm">
            <p className=" font-semibold">MY COMPANY</p>
            <p className="text-xs">DEMO COMPANY</p>
          </div>
        </div>
        <div>
          <nav className="inline-flex gap-12 pr-40">
            {["Service", "Media", "Cases", "FAQ", "Contacts"].map(
              (title, index) => (
                <CustomnavLink title={title} key={index} />
              )
            )}
          </nav>
        </div>
        <div>
          <div className=" flex p-4 gap-8 ">
            <Link
              href="tel: +91 0000000000"
              className=" flex items-center  text-[#88A855] ml-8"
            >
              <img src="contact-icon.png" alt="phone-icon" className=" w-8 " />
              91+ 0000000000
            </Link>
            <Link
              href="mailto:Demo@gmail.com"
              className=" flex items-center text-[#88A855]"
              type="mail"
            >
              <img
                src="mail-icon.png"
                alt="mail-icon"
                className=" w-8 mr-2 fill-current"
              />
              Demo@gmail.com
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
