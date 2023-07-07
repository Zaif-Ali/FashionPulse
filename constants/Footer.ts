import { BsInstagram, BsTwitter } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { SiFacebook } from "react-icons/si";

export interface socialMediaLinks {
    name: string;
    linkUrl: string;
    icon: IconType;
  }
  export  const data_socialMedia: socialMediaLinks[] = [
    {
      name: "Facebook",
      linkUrl: "",
      icon: SiFacebook,
    },
    {
      name: "Instagram",
      linkUrl: "",
      icon: BsInstagram,
    },
    {
      name: "Twitter",
      linkUrl: "",
      icon: BsTwitter,
    },
  ];
  export  const footer_Navbar = [
    {
      name: "Twitter",
      linkUrl: "",
    },
    {
      name: "Carrers",
      linkUrl: "",
    },
    {
      name: "Refund Policy",
      linkUrl: "",
    },
    {
      name: "Contact us",
      linkUrl: "",
    },
  ];