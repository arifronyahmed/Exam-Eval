function BlogCard({ post }) {
  const formattedDate = formatDate(post.createdAt);
  return (
    <div className="group mx-auto h-full overflow-hidden bg-darkishGreen shadow-sm shadow-gray-800 md:rounded-xl md:shadow-lg">
      <img
        className="h-28 w-full transform object-cover transition-transform group-hover:scale-105 md:h-60"
        src={`http://localhost:1337${post.blogImage.data.attributes.formats.small.url}`}
      />
      <div className="px-2 md:p-6">
        <h2 className="main-title mb-2 line-clamp-2 text-lg font-semibold uppercase md:mb-6 md:text-xl">
          {post.blogTitle}
        </h2>
        <p className="mb-4 line-clamp-4 text-justify text-xs text-gray-300 md:mx-3 md:mb-7 md:text-base">
          {post.blogText}
        </p>
        <div className="mb-4 flex items-center text-xs md:text-base justify-between capitalize text-gray-400">
          <p>Created by {post.creator}</p>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Date(dateString).toLocaleString('en-US', options);
  return formattedDate;
}
