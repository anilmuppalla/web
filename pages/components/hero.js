function Hero(props) {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center gap-4 md:items-center">
          <div className="flex justify-center">
            <img
              className="object-cover object-right-bottom w-48 h-48 border border-blue-400 rounded-full"
              src="/img/anil.jpeg"
              alt="anil muppalla"
            />
          </div>

          <div className="text-5xl font-bold text-center text-blue-600 md:text-left">
            Anil Muppalla
          </div>
          <div className="text-2xl text-center text-blue-600 md:text-left">
            Software Engineering Manager
          </div>
          <div>
            <div className="flex justify-center mt-2 space-x-4 md:justify-start">
            <a
                className="text-lg text-blue-600 underline"
                target="_blank"
                rel="noopener"
                href="https://bsky.app/profile/anilmuppalla.bsky.social"
              >
                bluesky
              </a>
              <a
                className="text-lg text-blue-600 underline"
                target="_blank"
                rel="noopener"
                href="https://twitter.com/anilmuppallar"
              >
                twitter
              </a>
              <a
                className="text-lg text-purple-600 underline"
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/anilmuppalla/"
              >
                linkedin
              </a>
              <a
                className="text-lg text-red-600 underline"
                target="_blank"
                rel="noopener"
                href="https://github.com/anilmuppalla"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="text-lg">
          <div>
            Hello there 👋 ! My name is Anil and I am a Software Engineering Manager at{" "}
            <a
              className="font-bold text-green-600 no-underline hover:underline"
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
          <p className="mt-4">On my blog, I share my passion for Large-Scale distributed processing systems, and offer insights and discoveries that I hope will inspire and benefit others in the tech community. I'd be honored if you join me on this journey, so hit that subscribe button and let's explore together!</p>
          <div className="flex flex-col items-center justify-center py-4">
            <iframe src="https://techblocks.substack.com/embed" className="w-full h-72" />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Hero;
