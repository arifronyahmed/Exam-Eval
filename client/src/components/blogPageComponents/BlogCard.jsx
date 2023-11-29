function BlogCard({ post }) {
  const formattedDate = formatDate(post.createdAt);
  return (
    <div className="group  h-full overflow-hidden m-4 bg-darkishGreen  rounded-lg shadow-gray-800 md:rounded-xl shadow-lg">
      <img
        className="h-36 w-full transform object-cover transition-transform group-hover:scale-105 md:h-60"
        src={`http://localhost:1337${post.blogImage.data.attributes.formats.small.url}`}
      />
      <div className="px-2 md:p-6">
        <h2 className="main-title mb-2 line-clamp-2 text-lg font-semibold uppercase md:mb-6 md:text-xl">
          {post.blogTitle}
        </h2>
        <p className="mb-4 line-clamp-4 text-justify text-xs text-gray-300 md:mx-3 md:mb-7 md:text-base">
          {post.blogText}
        </p>
        <div className="mb-4 flex items-center justify-between text-xs capitalize text-gray-400 md:text-base">
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
