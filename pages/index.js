import React, { useState } from "react";
import Hero from "./components/hero";
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
        <div className="p-4 mx-auto max-w-screen-md">
          <Hero />
          <div className="mt-4 space-x-4">
            <button
              onClick={() => setPage("speaker")}
              className={` ${
                showPage === "speaker"
                  ? "bg-teal-400 text-white border-transparent focus:outline-none"
                  : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent focus:outline-none border-blue-500"
              }   font-semibold  py-2 px-4 border rounded-full`}
            >
              Speaker
            </button>
            <button
              onClick={() => setPage("blog")}
              className={` ${
                showPage === "blog"
                  ? "bg-teal-400 text-white border-transparent active:outline-none focus:outline-none"
                  : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent focus:outline-none border-blue-500"
              }   font-semibold  py-2 px-4 border rounded-full`}
            >
              Blog
            </button>
            <button
              onClick={() => setPage("book")}
              className={` ${
                showPage === "book"
                  ? "bg-teal-400 text-white border-transparent focus:outline-none"
                  : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent focus:outline-none border-blue-500"
              }   font-semibold  py-2 px-4 border rounded-full`}
            >
              Book
            </button>
          </div>
          <div className="mt-4">
            <div className={showPage === "speaker" ? "block" : "hidden"}>
              <img
                className="w-auto h-auto"
                src="/img/qcon-ai-presentation.jpg"
                alt="Evolution of Spotify Home"
              />
              <div className="flex justify-between items-center">
                <a
                  className="text-blue-500 text-2xl hover:underline"
                  target="_blank"
                  rel="noopener"
                  href="https://www.infoq.com/presentations/evolution-spotify-arch/"
                >
                  Watch
                </a>
                <img
                  className="mt-2 w-1/6 h-1/6"
                  src="/img/qcon-ai-logo.svg"
                  alt="Qcon"
                />
              </div>
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
