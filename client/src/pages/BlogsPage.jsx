import { useEffect, useState } from 'react';
import BlogCard from '../components/blogPageComponents/BlogCard';
import { Link } from 'react-router-dom';

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
    <div className="container mx-auto mt-40 max-w-6xl">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {blogPosts &&
            blogPosts.map((post) => (
              <Link to={`/blogs/${post.id}`} key={post.id}>
                <BlogCard post={post.attributes} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}

export default BlogsPage;
