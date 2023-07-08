import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { DataProp } from "@/constants/ImageGrid";

interface Props {
  data: DataProp[];
  noSmallDevices: number;
  noMedimDevices: number;
  noLargeDevices: number;
  _startingPoint: number;
  _endingPoint: number;
}

const ImageRow: NextPage<Props> = ({
  data,
  _endingPoint,
  _startingPoint,
  noLargeDevices,
  noMedimDevices,
  noSmallDevices,
}) => {
  const SlicedData = data.slice(_startingPoint, _endingPoint);
  return (
    <>
      <Wrapper>
        <div
          className={`grid grid-cols-${noSmallDevices} gap-4 md:grid-cols-${noMedimDevices} lg:grid-cols-${noLargeDevices}  lg:gap-8 pt-8`}
        >
          {SlicedData.map((EachImage: DataProp, index: number) => {
            return (
              <Link
                href={EachImage.link}
                className="relative block group "
                key={index}
              >
                <Image
                  width={300}
                  height={300}
                  src={EachImage.src}
                  alt={EachImage.alt}
                  className="object-cover w-full transition duration-500  bg-gradient-to-t from-slate-900/80 hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-slate-950/80  ">
                  <h3 className="  text-3xl font-bold text-white">
                    {EachImage.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default ImageRow;
