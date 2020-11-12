function Post(props) {
  console.log(props);
  const title = props.title;
  const imageUrl = props.imageUrl;
  const imageAlt = props.imageAlt;
  const outLink = props.outLink;
  const tag = props.tag;
  const date = props.date;
  const summary = props.summary;
  return (
    <a
      className="md:hover:bg-gray-100"
      target="_blank"
      rel="noopener"
      href={outLink}
    >
      <div className="overflow-hidden rounded-lg border-solid border">
        <img className="object-cover" src={imageUrl} alt={imageAlt} />
        <div className="border-gray-100 p-2">
          <div className="flex justify-between">
            <div className="font-bold text-gray-800 text-l md:text-xl">
              {title}
            </div>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
          <span className="text-blue-600">#{tag}</span>
          <p className=" text-sm md:text-base">{summary}</p>
        </div>
      </div>
    </a>
  );
}

export default Post;
