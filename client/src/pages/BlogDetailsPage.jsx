import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

function BlogDetails() {
  const [blogData, setBlogData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/blogs/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error.message);
      }
    };

    fetchData();
  }, [id]);

  const { attributes } = blogData.data || {};
  const { blogTitle, creator, createdAt, updatedAt, blogText } =
    attributes || {};

  return (
    <div className="container mx-auto mt-10 max-w-2xl">
      <div className="prose lg:prose-xl">
        <h1 className="mb-4 text-3xl font-bold">{blogTitle}</h1>
        <p className="mb-2 text-gray-600">
          By {creator} | {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className="mb-4 text-gray-500">
          Last updated: {new Date(updatedAt).toLocaleDateString()}
        </p>
        {/* <Markdown options={{ forceBlock: true }}>{blogText}</Markdown> */}
      </div>
    </div>
  );
}

export default BlogDetails;
