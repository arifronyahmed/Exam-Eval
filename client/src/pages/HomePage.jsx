import FaitesDuSportSection from '../components/homePageComponents/FaitesDuSportSection';
import NewsletterCard from '../components/homePageComponents/NewsletterCard';
import AdvantagesSection from '../components/homePageComponents/AdvantagesSection';
import TrainersSection from '../components/homePageComponents/TrainersSection';
import useFetch from '../useFetch';
import LoadingSpinner from '../components/shared/LoadingSpinner';
const baseUrl = 'http://localhost:1337';

function HomePage() {
  const url = `${baseUrl}/api/home-page?populate=deep`;
  const { data: cmsHomePageData, loading } = useFetch(url);

  if (loading) {
    return (
      <div className="container mx-auto max-w-6xl md:mt-40">
        <div className="flex h-screen items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

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
        <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center">
          <h1 className="main-title mb-4 ml-4 text-4xl font-semibold md:text-6xl">
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
