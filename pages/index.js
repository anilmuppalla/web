import React, { useState } from "react";
import Hero from "./components/hero";
import Speaker from "./components/speaker";
function Home(props) {
  const [showPage, setPage] = useState(props.showPage);

  return (
    <html lang="en">
      <head>
        <title>Anil Muppalla</title>
        <meta name="Description" content="Personal Blog"></meta>
        <meta
          property="og:title"
          content="Anil Muppalla's webpage"
          key="title"
        />
      </head>
      <body>
        <div className="pl-4 pr-4 pt-6 pb-6 lg:p-0 mx-auto max-w-screen-md items-center">
          <Hero />
          <div className="mt-4 space-x-4">
            <button
              onClick={() => setPage("speaker")}
              className={` ${
                showPage === "speaker"
                  ? "bg-teal-400 text-white border-transparent focus:outline-none"
                  : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent focus:outline-none border-blue-500"
              }   font-semibold  py-1 px-4 border rounded-full`}
            >
              Speaker
            </button>
            <button
              onClick={() => setPage("blog")}
              className={` ${
                showPage === "blog"
                  ? "bg-teal-400 text-white border-transparent active:outline-none focus:outline-none"
                  : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent focus:outline-none border-blue-500"
              }   font-semibold  py-1 px-4 border rounded-full`}
            >
              Blog
            </button>
            <button
              onClick={() => setPage("book")}
              className={` ${
                showPage === "book"
                  ? "bg-teal-400 text-white border-transparent focus:outline-none"
                  : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent focus:outline-none border-blue-500"
              }   font-semibold py-1 px-4 border rounded-full`}
            >
              Book
            </button>
          </div>
          <div className="mt-4">
            <div className={showPage === "speaker" ? "block" : "hidden"}>
              <Speaker />
            </div>
            <div className={showPage === "blog" ? "block" : "hidden"}>
              Blog notes
            </div>
            <div className={showPage === "book" ? "block" : "hidden"}>
              Book notes
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Home;

export const getStaticProps = async () => {
  return { props: { showPage: "speaker" } };
};
