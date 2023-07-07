"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCart } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { GrMenu } from "react-icons/gr";
import { useClickOutside, useViewportSize } from "@mantine/hooks";
import Menu from "./Menu";
import Banner from "../Banner";
import ToolTip_BTN from "../Buttons/ToolTip_BTN";

const Header = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const { width } = useViewportSize();
  const [mobileMenu, setMobileMenu] = useState(width >= 768);

  // Detect user click outside of the navbars
  const ref = useClickOutside(() => setIsNavbarHidden(true));

  const toggleNavbar = () => {
    setIsNavbarHidden((prev) => !prev);
  };

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[110px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full fixed z-20 top-0 left-0 transition-transform duration-300   ${show}`}
    >
      <Banner />
      <nav
        className="bg-white dark:bg-gray-900 md:border-0 border-gray-200 dark:border-gray-600 "
        ref={ref}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 lg:py-2">
          <Link href="/" className="flex items-center">
            <Image
              width={28}
              height={28}
              src={"./images/logo.svg"}
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="hidden lg:block self-center text-2xl font-semibold whitespace-nowrap text-textColor dark:text-darktextColor hover:text-accent-foreground ">
              FashionPulse
            </span>
          </Link>
          <div className="flex lg:order-3">
            <Link href="/cart">
              <ToolTip_BTN
                ToolTipName="Cart"
                childElement={
                  <div className="w-8 lg:w-12 h-8 lg:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                    <BsCart className="text-[20px]" />

                    <div className="h-[14px] lg:h-[18px] min-w-[14px] lg:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 lg:left-7 text-white text-[10px] lg:text-[12px] flex justify-center items-center px-[2px] lg:px-[5px]">
                      4
                    </div>
                  </div>
                }
              />
            </Link>
            <button type="button" className="text-white   text-sm px-2 py-2   ">
              <ToolTip_BTN
                childElement={<FcGoogle className="text-[25px]" />}
                ToolTipName="Sign-in"
              />
            </button>

            <button
              data-collapse-toggle="navbar-default"
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 dark:focus:ring-0 ring-gray-300 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <GrMenu className="w-6 h-6" />
            </button>
          </div>
          <div
            className={`items-center justify-between  w-full lg:flex lg:w-auto lg:order-1 `}
            id="navbar"
          >
            <Menu
              isNavbarHidden={isNavbarHidden}
              setIsNavbarHidden={setIsNavbarHidden}
            />
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Header;
