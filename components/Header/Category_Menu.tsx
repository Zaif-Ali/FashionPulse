import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useViewportSize } from "@mantine/hooks";
import { categories, categorySection } from "@/constants/Header";

const Category_Menu = () => {
  // Get teh view port size of the screen
  const { width } = useViewportSize();
  // Set the number of categories in each column
  let maxCategoriesPerColumn = width >= 768 ? 4 : 6;
  
  let numColumns = Math.ceil(categories.length / maxCategoriesPerColumn);
  const renderColumns = () => {
    const columns = [];
    let startIndex = 0;

    for (let i = 0; i < numColumns; i++) {
      const endIndex = startIndex + maxCategoriesPerColumn;
      const columnCategories = categories.slice(startIndex, endIndex);

      const categoryItems = columnCategories.map(
        (category: categorySection, index: number) => (
          <li key={index} className="flex space-x-1 ">
            <Link
              href={`/shop/${category.link}`}
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground whitespace-nowrap font-medium"
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

      const column = (
        <ul
          className="space-y-2"
          aria-labelledby="mega-menu-dropdown-button"
          key={i}
        >
          {categoryItems}
        </ul>
      );

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
              className=" px-0 py-0 text-textColor hover:text-primary
               rounded md:bg-transparent font-semibold lg:text-lg"
            >
              Category&apos;s
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-row justify-around p-4 md:p-5 space-x-7 border rounded-2xl">
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
