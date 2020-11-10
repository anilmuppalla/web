function Hero(props) {
  return (
    <div>
      <div>
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <div className="font-mono text-5xl text-gray-800 text-center md:text-left">
              Anil Muppalla
            </div>
            <div className="font-mono text-2xl text-gray-600 text-center md:text-left">
              Software Engineer in New York
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-56 h-56 rounded-full object-cover object-right-bottom"
              src="/img/anil.jpg"
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
            Hello there 👋 ! My name is Anil and I am a Senior Engineer at{" "}
            <a
              className="text-green-600 font-bold no-underline hover:underline"
              rel="noopener"
              target="_blank"
              href="https://spotify.com/us"
            >
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
          <p className="mt-4">
            if you want to chat drop me a message{" "}
            <a
              className="text-blue-600 text-lg"
              target="_blank"
              rel="noopener"
              href="https://twitter.com/anilmuppallar"
            >
              @anilmuppallar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
