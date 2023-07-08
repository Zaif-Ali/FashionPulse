import ImageGrid from "@/components/ImageGrid";
import ImageRow from "@/components/ImageRow";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { Watchimages } from "@/constants/ImageGrid";
import { men_collection_images } from "@/constants/men-collection";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const mens: NextPage<Props> = ({}) => {
  return (
    <div className="mt-16">
      <Head>
        <title>{` Mens - Collection | FashionPulse `}</title>
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="ZAIF ALI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Meta description for the Home page`}
        />
      </Head>
      <Wrapper className="my-10">
        <div className="pt-16" data-aos="fade-up">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Collection for{" "}
              <span className="text-primary underline underline-offset-4 decoration-primary-foreground/95  ">
                Mens
              </span>
            </h2>
          </header>
        </div>

        <ImageRow
          data={men_collection_images}
          _startingPoint={0}
          _endingPoint={2}
          noSmallDevices={1}
          noMedimDevices={1}
          noLargeDevices={2}
        />

        <ImageRow
          data={men_collection_images}
          _startingPoint={2}
          _endingPoint={5}
          noSmallDevices={1}
          noMedimDevices={2}
          noLargeDevices={3}
        />
        <div className="py-3">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>
        </div>
        <ProductCard/>
      </Wrapper>
    </div>
  );
};

export default mens;
