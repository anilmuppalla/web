import React from "react";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
function Home() {

  return (
    <div className="flex">
      <div className="p-8 mx-auto max-w-screen-md items-center">
        <Hero />
        <div className="mt-4">
          <p className="text-lg my-4">
            Here are some highlights of my work
          </p>
          <Highlights />
        </div>
      </div>
    </div >
  );
}

export default Home;

export const getStaticProps = async () => {
  return { props: { showPage: "highlights" } };
};
