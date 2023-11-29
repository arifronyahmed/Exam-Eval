import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/blogPageComponents/BlogCard';
import LoadingSpinner from '../components/shared/LoadingSpinner';

function BlogsPage() {
  const [cmsBlogPageData, setCmsBlogPageData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:1337/api/blogs?populate=deep',
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
            },
          },
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCmsBlogPageData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching CMS data:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { data: blogPosts } = cmsBlogPageData;
  return (
    <div className="container mx-auto  md:mt-40 max-w-6xl">
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="mb-8 grid gap-4 md:gap-12 md:p-10 sm:grid-cols-1 md:mb-48 md:grid-cols-2">
          {blogPosts &&
            blogPosts.map((post) => (
              <Link to={`/blogs/${post.attributes.slug}`} key={post.id}>
                <BlogCard post={post.attributes} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}

export default BlogsPage;
