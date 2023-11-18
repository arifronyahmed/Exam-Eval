function BlogCard({ post }) {
  const formattedDate = formatDate(post.createdAt);
  return (
    <div className="group mx-auto max-w-md overflow-hidden rounded-xl bg-darkishGreen shadow-xl">
      <img
        className="h-60 w-full transform object-cover group-hover:scale-110 transition-transform"
        src={`http://localhost:1337${post.blogImage.data.attributes.formats.small.url}`}
      />
      <div className="p-6">
        <h2 className="main-title mb-6 line-clamp-2 text-xl font-bold">
          {post.blogTitle}
        </h2>
        <p className="mb-7 line-clamp-4 text-justify text-gray-400">
          {post.blogText}
        </p>
        <div className="flex items-center justify-between text-gray-500 ">
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
