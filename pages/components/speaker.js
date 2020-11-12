import Post from "./post";
function Speaker(props) {
  const contents = [
    {
      key: "How Spotify Built Shortcuts in Just Six Months",
      title: "How Spotify Built Shortcuts in Just Six Months",
      imageUrl: "/img/shortcuts.png",
      imageAlt: "Spotify Home Shortcuts",
      tag: "highlights",
      date: "Apr 15, 2020",
      summary:
        "Learn more about the methodology behind one of Spotify's most exciting features",
      outLink:
        "https://engineering.atspotify.com/2020/04/15/reach-for-the-top-how-spotify-built-shortcuts-in-just-six-months/",
    },
    {
      key: "The Evolution of Spotify Home Architecture",
      title: "The Evolution of Spotify Home Architecture",
      imageUrl: "/img/evolution-spotify-home.jpg",
      imageAlt: "Evolution of Spotify Home",
      tag: "highlights",
      date: "Jun 18, 2019",
      summary:
        "Learn more about how our infrastructure power Spotify Home evolved over time as we served millions of users. This was presented at QCon.AI",
      outLink: "https://www.infoq.com/presentations/evolution-spotify-arch/",
    },
  ];
  return (
    <div className="mb-4 grid grid-cols-1 gap-4">
      {contents.map((content) => (
        <Post {...content} />
      ))}
    </div>
  );
}

export default Speaker;
