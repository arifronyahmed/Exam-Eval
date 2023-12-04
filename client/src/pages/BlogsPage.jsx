import { Link } from 'react-router-dom';
import BlogCard from '../components/blogPageComponents/BlogCard';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import useFetch from '../useFetch';

function BlogsPage() {
  const url = 'http://localhost:1337/api/blogs?populate=deep';
  const { data: cmsBlogPageData, loading } = useFetch(url);

  if (loading) {
    return (
      <div className="container mx-auto max-w-6xl md:mt-40">
        <div className="flex h-screen items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  const { data: blogPosts } = cmsBlogPageData;

  return (
    <div className="container mx-auto max-w-6xl md:mt-40">
      <div className="mb-8 grid gap-4 sm:grid-cols-1 md:mb-48 md:grid-cols-2 md:gap-12 md:p-10">
        {blogPosts &&
          blogPosts.map((post) => (
            <Link to={`/blogs/${post.attributes.slug}`} key={post.id}>
              <BlogCard post={post.attributes} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default BlogsPage;
