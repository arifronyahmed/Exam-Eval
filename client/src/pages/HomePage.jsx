import { useEffect, useState } from 'react';
import FaitesDuSportSection from '../components/homePageComponents/FaitesDuSportSection';
import NewsletterCard from '../components/homePageComponents/NewsletterCard';
import AdvantagesSection from '../components/homePageComponents/AdvantagesSection';
import TrainersSection from '../components/homePageComponents/TrainersSection';

const baseUrl = 'http://localhost:1337';

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
  const imageUrl =
    cmsHomePageData.data?.attributes?.heroSection.image.data.attributes.formats
      .medium.url || '';
  const advantagesSection =
    cmsHomePageData.data?.attributes.advantagesSection || '';

  return (
    <>
      <section
        className="h-screen bg-gray-700 bg-cover bg-center bg-blend-multiply"
        style={{ backgroundImage: `url(${baseUrl}${imageUrl})` }}
      >
        <div className="flex h-full max-w-6xl flex-col items-center justify-center mx-auto">
          <h1 className="main-title mb-4 text-6xl font-semibold">
            {cmsHomePageData.data?.attributes?.heroSection?.title}
          </h1>
          <p className="text-lg">
            {cmsHomePageData.data?.attributes?.heroSection?.subTitle}
          </p>
        </div>
      </section>
      <AdvantagesSection advantagesSection={advantagesSection} />
      <FaitesDuSportSection faitesDuSportSection={faitesDuSportSection} />
      <TrainersSection />
      <NewsletterCard newsletterCard={newsletterCard} />
    </>
  );
}

export default HomePage;
