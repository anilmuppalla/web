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
              onClick={() => setPage("highlights")}
              className={` ${
                showPage === "highlights"
                  ? "bg-teal-400 text-white border-transparent focus:outline-none"
                  : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent focus:outline-none border-blue-500"
              }   font-semibold  py-1 px-4 border rounded-full`}
            >
              Highlights
            </button>
            <button
              onClick={() => setPage("articles")}
              className={` ${
                showPage === "articles"
                  ? "bg-teal-400 text-white border-transparent active:outline-none focus:outline-none"
                  : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent focus:outline-none border-blue-500"
              }   font-semibold  py-1 px-4 border rounded-full`}
            >
              Articles
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
            <div className={showPage === "highlights" ? "block" : "hidden"}>
              <Speaker />
            </div>
            <div className={showPage === "articles" ? "block" : "hidden"}>
              Coming soon...
            </div>
            <div className={showPage === "book" ? "block" : "hidden"}>
              Coming soon...
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Home;

export const getStaticProps = async () => {
  return { props: { showPage: "highlights" } };
};
