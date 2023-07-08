import { getDiscountedPricePercentage } from "@/utils/helper";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const ProductCard: NextPage<Props> = ({}) => {
  return (
    <>
      <Link
        href={`/product/dd`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <Image
          width={500}
          height={500}
          src={'/11.webp'}
          alt={'ww'}
        />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">name</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;100</p>

            {/* {p.original_price && (
              <>
                <p className="text-base  font-medium line-through">
                  &#8377;{p.original_price}
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  {getDiscountedPricePercentage(p.original_price, p.price)}% off
                </p>
              </>
            )} */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
