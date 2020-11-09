function Speaker(props) {
  return (
    <div className="rounded overflow-hidden shadow-xl md:shadow-none md:hover:shadow-xl">
      <a
        target="_blank"
        rel="noopener"
        href="https://www.infoq.com/presentations/evolution-spotify-arch/"
      >
        <div className="md:flex md:justify-between">
          <img
            className="w-full h-auto"
            src="/img/qcon-ai-presentation.jpg"
            alt="Evolution of Spotify Home"
          />
          <div className="border-gray-100 m-2 md:mt-0">
            <div className="font-bold text-gray-800 text-xl">
              The Evolution of Spotify Home Architecture
            </div>
            <p className="text-sm text-gray-600">Jun 18</p>
            <div className="text-base mt-2">
              Learn more about how we evolved our systems over time to serve
              recommendations to millions of users and what we learned along the
              way.
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Speaker;
