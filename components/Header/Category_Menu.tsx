import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useViewportSize } from "@mantine/hooks";
import { categorySection } from "@/constants/Header";
import { ChevronDown } from "lucide-react";

const Category_Menu = ({
  categorie,
  title,
  url,
}: {
  categorie: categorySection[];
  title: string;
  url?: string;
}) => {
  // Get teh view port size of the screen
  const { width } = useViewportSize();
  useEffect(() => {
    setMobileMenu(width >= 768);
  }, [width]);
  const [mobileMenu, setMobileMenu] = useState(width >= 768);
  // Set the number of categorie in each column
  let maxCategoriesPerColumn = width >= 768 ? 4 : 6;

  let numColumns = Math.ceil(categorie.length / maxCategoriesPerColumn);
  const renderColumns = () => {
    const columns = [];
    let startIndex = 0;

    for (let i = 0; i < numColumns; i++) {
      const endIndex = startIndex + maxCategoriesPerColumn;
      const columnCategories = categorie.slice(startIndex, endIndex);

      const categoryItems = columnCategories.map(
        (category: categorySection, index: number) => (
          <li key={category.title} className="flex rounded-lg px-2 py-1  ">
            <Link
              href={`/shop/${category.link}`}
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground whitespace-nowrap font-medium "
            >
              {category.title}
            </Link>
            {/* if the category was updated  */}
            {category.isupdated && (
              <div className="h-[14px] lg:h-[18px] min-w-[14px] lg:min-w-[18px] rounded bg-red-500  top-1 left-5 lg:left-7 text-white text-[10px] lg:text-[12px] flex justify-center items-center px-[2px] lg:px-[5px]">
                new
              </div>
            )}
          </li>
        )
      );

      const column = <ul className="space-y-1">{categoryItems}</ul>;

      columns.push(column);
      startIndex += maxCategoriesPerColumn;
    }

    return columns;
  };

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className=" px-0 py-0  text-textColor hover:text-primary
               rounded md:bg-transparent font-semibold lg:text-lg "
            >
              {url ? <Link href={`${url}`}>{title}</Link> : title}

              <ChevronDown
                className="relative top-[1px] ml-3 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 "
                aria-hidden="true"
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="   z-10">
              <ul className=" flex flex-row justify-around p-4 md:p-5 space-x-7 border rounded-2xl ">
                {renderColumns()}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Category_Menu;
