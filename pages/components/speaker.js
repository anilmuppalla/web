function Speaker(props) {
  return (
    <div className="">
      <a
        target="_blank"
        rel="noopener"
        href="https://engineering.atspotify.com/2020/04/15/reach-for-the-top-how-spotify-built-shortcuts-in-just-six-months/"
      >
        <div className="mb-4 rounded overflow-hidden md:flex">
          <div className="md:w-1/3">
            <img
              className="object-cover"
              src="/img/shortcuts.png"
              alt="Spotify Home Shortcuts"
            />
          </div>
          <div className="md:w-2/3 border-gray-100 m-2">
            <div className="font-bold text-gray-800 text-xl">
              How Spotify Built Shortcuts in Just Six Months
            </div>
            <p className="text-sm text-gray-600">Apr 15, 2020</p>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        rel="noopener"
        href="https://www.infoq.com/presentations/evolution-spotify-arch/"
      >
        <div className="mb-4 rounded overflow-hidden md:flex">
          <div className="md:w-1/3">
            <img
              className="object-cover"
              src="/img/evolution-spotify-home.jpg"
              alt="Evolution of Spotify Home"
            />
          </div>
          <div className="md:w-2/3 border-gray-100 m-2">
            <div className="font-bold text-gray-800 text-xl">
              The Evolution of Spotify Home Architecture
            </div>
            <p className="text-sm text-gray-600">Jun 18, 2019</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Speaker;
