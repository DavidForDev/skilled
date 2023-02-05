import Head from "next/head";

const HeadPage = ({ title, description, favicon }) => {
  return (
    <Head>
      <title>{title ? title : "page"}</title>
      <meta name="description" content={description ? description : ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon ? favicon : "/favicon-32x32.png"} />
    </Head>
  );
};

export default HeadPage;
