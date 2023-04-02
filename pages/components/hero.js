function Hero(props) {
  return (
    <div>
      <div>
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <div className="text-5xl text-gray-800 text-center md:text-left">
              Anil Muppalla
            </div>
            <div className="text-2xl text-gray-600 text-center md:text-left">
              Engineering Manager
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-48 h-48 rounded-full object-cover object-right-bottom"
              src="/img/anil.jpeg"
              alt="anil muppalla"
            />
          </div>
        </div>
        <div>
          <div className="mt-2 space-x-4 flex justify-center md:justify-start">
            <a
              className="underline text-blue-600 text-lg"
              target="_blank"
              rel="noopener"
              href="https://twitter.com/anilmuppallar"
            >
              twitter
            </a>
            <a
              className="underline text-purple-600 text-lg"
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/anilmuppalla/"
            >
              linkedin
            </a>
            <a
              className="underline text-red-600 text-lg"
              target="_blank"
              rel="noopener"
              href="https://github.com/anilmuppalla"
            >
              github
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="text-lg">
          <p>
            Hello there 👋 ! My name is Anil and I am an Engineering Manager at{" "}
            <a
              className="text-green-600 font-bold no-underline hover:underline"
              rel="noopener"
              target="_blank"
              href="https://spotify.com/us"
            >
              Spotify.{" "}
            </a>
            <p className="mt-4">
              Imagine having a personal genie that knows exactly what you want, even before you ask for it! Well, that's what I'm working on every day building Machine Learning infrastructure for recommender systems at Spotify.
            </p>
          </p>
          <p className="mt-4">
            In the past I helped create a SAAS company that provided powerful analytical tools to schools, helping educators make data-driven decisions and students achieve their goals.

          </p>
          <div className="mt-4 flex flex-col justify-center">
            <p>On my blog, I dive into the exciting realm of Large-Scale distributed processing systems, uncovering new insights and discoveries along the way. If you want to join me on this adventure, hit that subscribe button and let's explore together!</p>
            <iframe src="https://techblocks.substack.com/embed" />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Hero;
