function BlogCard({ post }) {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md">
      <img
        className="h-48 w-full object-cover"
        src={`http://localhost:1337${post.blogImage.data.attributes.formats.medium.url}`}
        // alt={post.title}
      />
      <div className="p-6">
        <h2 className="mb-2 text-xl font-bold text-gray-800">
          {post.blogTitle}
        </h2>
        <p className="mb-2 line-clamp-3 text-gray-600">{post.blogText}</p>
        <div className="flex items-center justify-between text-gray-500">
          <p>Created by {post.creator}</p>
          <p>{formatDate(post.createdAt)}</p>
        </div>
        <a href="#" className="mt-3 block text-blue-500 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
}

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default BlogCard;
