import {
  data_socialMedia,
  footer_Navbar,
  socialMediaLinks,
} from "@/constants/Footer";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import ToolTip_BTN from "../Buttons/ToolTip_BTN";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <>
      <>
        <footer className="bg-gray-100">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-center text-teal-600">
              <Link href="/" className="flex items-center">
                <Image
                  width={28}
                  height={28}
                  src={"./images/logo.svg"}
                  className="h-8 mr-3"
                  alt="Flowbite Logo"
                />
                <span className="block self-center text-2xl font-semibold whitespace-nowrap text-textColor dark:text-darktextColor hover:text-accent-foreground">
                  FashionPulse
                </span>
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
              <span className="text-primary font-medium ">Fashion Pulse</span> -
              Where style meets convenience. Browse our diverse selection of
              fashion essentials, discover exclusive brands, and shop with
              confidence.
            </p>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              {footer_Navbar.map((d, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href={d.linkUrl}
                    >
                      {d.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 text-xl">
              Follow us on
            </p>
            <ul className="mt-6 flex justify-center gap-6 md:gap-8">
              {data_socialMedia.map((data: socialMediaLinks, index: number) => {
                return (
                  <li key={index}>
                    <ToolTip_BTN
                      childElement={
                        <Link
                          href={data.linkUrl}
                          rel="noreferrer"
                          target="_blank"
                          className="text-gray-700 transition hover:text-gray-700/75"
                        >
                          <span className="sr-only">{data.name}</span>
                          <data.icon className="h-6 w-6 " />
                        </Link>
                      }
                      ToolTipName={data.name}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </footer>
      </>
    </>
  );
};

export default Footer;
