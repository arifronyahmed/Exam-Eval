import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';

import { IoMdArrowRoundBack } from 'react-icons/io';

import Button from '../components/shared/Button';

import LoadingSpinner from '../components/shared/LoadingSpinner';

const baseUrl = 'http://localhost:1337';

function BlogDetails() {
  const [blogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/slugify/slugs/blog/${slug}?populate=deep`,
          {
            method: 'GET',
          },
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBlogData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching blog data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const { blogTitle, creator, createdAt, updatedAt, blogText, blogImage } =
    blogData.data?.attributes ?? {};

  const imageUrl = blogImage?.data?.attributes?.formats?.large?.url;

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div
            className="container h-48 bg-gray-400 bg-cover bg-fixed bg-center  bg-blend-multiply md:h-96"
            style={{ backgroundImage: `url(${baseUrl}${imageUrl})` }}
          ></div>

          <div className="container mx-auto mt-6 max-w-3xl md:mt-28">
            <Button className="back-button" onClick={() => navigate(-1)}>
              <IoMdArrowRoundBack size={30} />
              <span className="md:ml-4">Back</span>
            </Button>
            <div className="md:prose-xl">
              <h1 className="blog-title mx-2 mb-2 text-2xl font-bold  md:mb-4 md:text-4xl">
                {blogTitle}
              </h1>
              <p className="font-lg m-2 mt-4 font-semibold capitalize text-gray-500 md:mt-10 ">
                By {creator} | {new Date(createdAt).toLocaleDateString()}
              </p>
              <p className="m-2 mb-4 text-gray-500">
                Last updated: {new Date(updatedAt).toLocaleDateString()}
              </p>
              <article className="mx-2 mb-40 mt-8 md:mt-20">
                <Markdown>{blogText}</Markdown>
              </article>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BlogDetails;
