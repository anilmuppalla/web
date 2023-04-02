import Post from "./post";
function Highlights(props) {
  const contents = [
    {
      key: 3,
      title: "Preview Music, Podcasts, and Audiobooks on Spotify Home",
      imageUrl: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/03/Preview-on-Home_FTR-Header_Podcast_GIF.gif",
      imageAlt: "Preview Music, Podcasts, and Audiobooks on Spotify Home",
      date: "March 8, 2023",
      summary:
        "Spotify is the first platform to enable truly seamless previews across music, podcasts, and audiobooks",
      outLink: "https://www.newsroom.spotify.com/2023-03-08/spotify-previews-clips-music-podcasts-audiobooks-home-feed/",
    },
    {
      key: 1,
      title: "How Spotify Built Shortcuts in Just Six Months",
      imageUrl: "/img/shortcuts.png",
      imageAlt: "Spotify Home Shortcuts",
      date: "Apr 15, 2020",
      summary:
        "Learn more about the methodology behind one of Spotify's most exciting features",
      outLink:
        "https://engineering.atspotify.com/2020/04/15/reach-for-the-top-how-spotify-built-shortcuts-in-just-six-months/",
    },
    {
      key: 2,
      title: "The Evolution of Spotify Home Architecture",
      imageUrl: "/img/evolution-spotify-home.jpg",
      imageAlt: "Evolution of Spotify Home",
      date: "Jun 18, 2019",
      summary:
        "Learn more about how our infrastructure power Spotify Home evolved over time as we served millions of users. This was presented at QCon.AI",
      outLink: "https://www.infoq.com/presentations/evolution-spotify-arch/",
    },

  ];
  return (
    <div className="mb-4 flex flex-col gap-4">
      {contents.map((content) => (
        <Post {...content} />
      ))}
    </div>
  );
}

export default Highlights;
