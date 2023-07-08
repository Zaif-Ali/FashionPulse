import { NextPage } from "next";
import Head from "next/head";

interface Props {}

const womens: NextPage<Props> = ({}) => {
  return (
    <>
      <Head>
        <title>{` Womens - Collection | FashionPulse `}</title>
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="ZAIF ALI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Meta description for the Home page`}
        />
      </Head>
    </>
  );
};

export default womens;
