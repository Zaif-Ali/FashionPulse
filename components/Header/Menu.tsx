import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Category_Menu from "./Category_Menu";
import { MenCategories, categories } from "@/constants/Header";

interface Props {
  isNavbarHidden: boolean;
  setIsNavbarHidden: any;
}
interface MenuLink {
  title: string;
  url: string;
  dropdown: boolean;
  dropdownElement?: React.JSX.Element;
  isprotected: boolean;
}
export const menuLinks: MenuLink[] = [
  { title: "Home", url: "/", dropdown: false, isprotected: false },
  {
    title: "Mens",
    url: "/",
    dropdown: true,
    dropdownElement: <Category_Menu categorie={MenCategories} title={"Mens"} />,
    isprotected: false,
  },
  {
    title: "Women's",
    url: "/",
    dropdown: true,
    dropdownElement: <Category_Menu categorie={categories} title=" Women's" />,
    isprotected: false,
  },
  { title: "Sale", url: "/sale", dropdown: false, isprotected: false },
  {
    title: "New Arrival",
    url: "/new-arrival",
    dropdown: false,
    isprotected: false,
  },
  {
    title: "Category",
    url: "/",
    dropdown: true,
    dropdownElement: (
      <Category_Menu categorie={categories} title=" Category's" />
    ),
    isprotected: false,
  },
  { title: "About ", url: "/about", dropdown: false, isprotected: false },
  { title: "Admin ", url: "/admin", dropdown: false, isprotected:false },
];

const Menu: NextPage<Props> = ({ isNavbarHidden, setIsNavbarHidden }) => {
  const router = useRouter();
  return (
    <>
      <ul
        className={`
    ${isNavbarHidden ? "hidden" : ""}  
    lg:flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 
   
  `}
      >
        {menuLinks.map((link, index) => {
          if (link.dropdown) {
            return (
              <li
                key={index}
                className="
                 py-2 pl-3 pr-1  
                rounded lg:bg-transparent font-semibold lg:text-lg
                
              "
              >
                {link.dropdownElement}
              </li>
            );
          } else {
            return (
              <Link
                key={index}
                href={link.url}
                onClick={setIsNavbarHidden}
                className={`
               block py-2 pl-3 pr-1  
                rounded lg:bg-transparent font-semibold lg:text-lg
                ${
                  router.pathname === link.url
                    ? "text-primary hover:text-purple-600 "
                    : "text-textColor hover:text-gray-900 "
                }
               `}
              >
                {link.title}
              </Link>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Menu;
