import HeroCarousel from "@/components/Carousel/HeroCarousel";
import ImageGrid from "@/components/ImageGrid";
import Intouch from "@/components/Intouch";
import { Menimages, Watchimages, Womenimages } from "@/constants/ImageGrid";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Head>
        <title>{` Home || FashionPulse `}</title>
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="ZAIF ALI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Meta description for the Home page`}
        />
      </Head>
      <main className="py-20 md:px-10">
        <div data-aos="fade-up">
          <HeroCarousel />
        </div>
        <div className="pt-16" data-aos="fade-up">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Collection for{" "}
              <span className="text-primary underline underline-offset-4 decoration-primary-foreground/95  ">
                Womens
              </span>
            </h2>
          </header>
        </div>
        <div data-aos="fade-up">
          {/* position 1 mean left to right and 0 mean right to left  */}
          <ImageGrid data={Womenimages} position={1} />
        </div>
        <div className="pt-16" data-aos="fade-up">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Collection for{" "}
              <span className="text-primary underline underline-offset-4 decoration-primary-foreground/95 ">
                Mens
              </span>
            </h2>
          </header>
        </div>
        <div data-aos="fade-up">
          <ImageGrid data={Menimages} position={0} />
        </div>
        <div className="pt-16" data-aos="fade-up">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              <span className="text-primary underline underline-offset-4 decoration-primary-foreground/95 ">
                Watches
              </span>{" "}
              For Everyone
            </h2>
          </header>
        </div>
        <div data-aos="fade-up">
          <ImageGrid data={Watchimages} position={0} straight={true} />
        </div>
        <div data-aos="fade-up">
          <Intouch />
        </div>
      </main>
    </>
  );
}
