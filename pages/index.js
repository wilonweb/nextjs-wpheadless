import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title key="pageTitle">Welcome to the travel blog</title>
        <meta
          name="description"
          content="coolNomad travek blog - read travel stories"
          key="metaDescription"
        />
      </Head>
      <div className="min-h-screen bg-[url('/hiking.jpg')] relative">
        <div className="absolute bg-slate-900 inset-0 z-0 opacity"></div>
      </div>
    </>
  );
}
