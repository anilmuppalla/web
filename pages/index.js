import React, { useState, useEffect } from "react";

function Home(props) {
  const [showPage, setPage] = useState(props.showPage);

  return (
    <div className="mx-auto max-w-screen-md">
      <div className="flex mt-32 space-x-48 justify-between items-center">
        <div>
          <h1 className="font-mono text-5xl text-gray-800">Anil Muppalla</h1>
          <h1 className="font-mono text-2xl text-gray-600">
            Software Engineer in New York
          </h1>
          <div className="mt-8 space-x-4">
            <a
              className="underline text-blue-600 text-lg"
              target="_blank"
              href="https://twitter.com/anilmuppallar"
            >
              twitter
            </a>
            <a
              className="underline text-purple-600 text-lg"
              target="_blank"
              href="https://www.linkedin.com/in/anilmuppalla/"
            >
              linkedin
            </a>
            <a
              className="underline text-red-600 text-lg"
              target="_blank"
              href="https://github.com/anilmuppalla"
            >
              github
            </a>
          </div>
        </div>
        <div>
          <img
            className="w-56 h-56 rounded-full object-cover object-right-bottom"
            src="/img/anil.jpg"
            alt="anil muppalla"
          />
        </div>
      </div>
      <div className="mt-6">
        <div className="text-lg">
          <p>
            Hello there 👋 ! My name is Anil and I am a Senior Engineer at
            <a
              className="text-green-600 font-bold no-underline hover:underline"
              href="https://spotify.com/us"
            >
              {" "}
              Spotify.
            </a>
          </p>
          <p className="mt-4">
            I am currently working on building large scale distributed data
            systems. In the past I have co-founded a SAAS startup that provided
            analytical tooling for educational institutions.
          </p>
          <p className="mt-4">
            I am also very fond of web and mobile technologies and I tend to
            spend a significant portion of my free time exploring them.
          </p>
          <p className="mt-4">Drop me a message if you want to connect/chat.</p>
        </div>
      </div>
      <div className="mt-4 space-x-8">
        <button
          onClick={() => setPage("speaker")}
          className={` ${
            showPage === "speaker"
              ? "bg-teal-400 text-white border-transparent"
              : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent border-blue-500"
          }   font-semibold  py-2 px-4 border rounded`}
        >
          Speaker
        </button>
        <button
          onClick={() => setPage("blog")}
          className={` ${
            showPage === "blog"
              ? "bg-teal-400 text-white border-transparent"
              : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent border-blue-500"
          }   font-semibold  py-2 px-4 border rounded`}
        >
          Blog
        </button>
        <button
          onClick={() => setPage("book")}
          className={` ${
            showPage === "book"
              ? "bg-teal-400 text-white border-transparent"
              : " hover:bg-teal-400 text-blue-700 hover:text-white bg-transparent hover:border-transparent border-blue-500"
          }   font-semibold  py-2 px-4 border rounded`}
        >
          Book
        </button>
      </div>
      <div className="mt-4">
        <div className={showPage === "speaker" ? "block" : "hidden"}>
          <img
            src="/img/qcon-ai-presentation.jpg"
            alt="Evolution of Spotify Home"
          />
          <div className="flex justify-between items-center">
            <a
              className=" text-blue-500 text-2xl hover:underline"
              target="_blank"
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
  );
}

export default Home;

export const getStaticProps = async () => {
  return { props: { showPage: "speaker" } };
};
