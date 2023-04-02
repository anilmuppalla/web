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
          <div>
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
              As an Engineering Manager, I work on building Machine Learning infrastructure that powers our recommender systems, which helps millions of people discover their new favorite songs every day.
            </p>
          </div>
          <p className="mt-4">
            In the past, I had the privilege of being part of a team that co-founded a SAAS company that provided analytical tools to educational institutions, aiming to make a positive impact in the field of education.
          </p>
          <div className="mt-4 flex flex-col justify-center">
            <p>On my blog, I share my passion for Large-Scale distributed processing systems, and offer insights and discoveries that I hope will inspire and benefit others in the tech community. I'd be honored if you join me on this journey, so hit that subscribe button and let's explore together!</p>
            <iframe src="https://techblocks.substack.com/embed" />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Hero;
