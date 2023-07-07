/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Wrapper from "./Wrapper";

import { DataProp } from "@/constants/ImageGrid";

export interface Props {
  data: DataProp[];
  position: number;
  straight?: boolean;
}

const ImageGrid: NextPage<Props> = ({ data, position, straight = false }) => {
  // style for the large image and here we set the position where they on left or right
  const styleForLargeImage = ` ${
    position ? "lg:col-start-2" : "lg:col-start-1"
  } md:row-span-2 md:row-start-1  md:col-span-2`;

  return (
    <Wrapper>
      <section className="lg:px-32">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 max-h-[1200]">
          <ul className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
            {data.map((d: DataProp, index: number) => {
              if (straight) {
                return (
                  <li key={index}>
                    <SimgeIma d={d} />
                  </li>
                );
              } else {
                if (index !== 2) {
                  return (
                    <li key={index}>
                      <SimgeIma d={d} />
                    </li>
                  );
                } else {
                  return (
                    <li className={styleForLargeImage} key={index}>
                      <SimgeIma d={d} />
                    </li>
                  );
                }
              }
            })}
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default ImageGrid;

import Link from "next/link";
export const SimgeIma = ({ d }: { d: DataProp }) => {
  return (
    <>
      <Link href={d.link} className="relative block group  ">
        <img
          src={d.src}
          alt={d.alt}
          className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 bg-gradient-to-t from-slate-900/80 "
        />

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-slate-900/80  ">
          <h3 className="  text-xl font-bold text-white">{d.title}</h3>

          <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            Shop Now
          </span>
        </div>
      </Link>
    </>
  );
};
