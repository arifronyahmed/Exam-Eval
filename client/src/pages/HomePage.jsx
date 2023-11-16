import { useEffect, useState } from 'react';
import FaitesDuSportSection from '../components/homePageComponents/FaitesDuSportSection';
import NewsletterCard from '../components/homePageComponents/NewsletterCard';

function HomePage() {
  const [cmsHomePageData, setCmsHomePageData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:1337/api/home-page?populate=deep',
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
        setCmsHomePageData(data);
      } catch (error) {
        console.error('Error fetching CMS data:', error.message);
      }
    };

    fetchData();
  }, []);
  const faitesDuSportSection =
    cmsHomePageData.data?.attributes?.faitesDuSportSection || {};
  const newsletterCard = cmsHomePageData.data?.attributes?.newsletterCard || {};

  return (
    <>
      <section className="h-screen bg-gray-700 bg-cover bg-center bg-blend-multiply">
        <div className="flex h-full flex-col items-center justify-center text-white">
          <h1 className="mb-4 text-5xl font-bold uppercase">
            {cmsHomePageData.data?.attributes?.heroSection?.title}
          </h1>
          <p className="text-lg">
            {cmsHomePageData.data?.attributes?.heroSection?.subTitle}
          </p>
        </div>
      </section>
      <FaitesDuSportSection faitesDuSportSection={faitesDuSportSection} />
      <NewsletterCard newsletterCard={newsletterCard} />
    </>
  );
}

export default HomePage;
