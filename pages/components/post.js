function Post({ title, imageUrl, imageAlt, outLink, tag, date,
  summary }) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <a
        className="md:hover:bg-gray-100"
        target="_blank"
        rel="noopener"
        href={outLink}
      >
        <img className="object-contain" src={imageUrl} alt={imageAlt} />
        <div className="border-gray-100 p-2">
          <div className="flex flex-col justify-between my-2">
            <div className="font-bold text-gray-800 text-l md:text-xl">
              {title}
            </div>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
          <p className=" text-sm md:text-base">{summary}</p>
        </div>
      </a>
    </div>
  );
}

export default Post;
