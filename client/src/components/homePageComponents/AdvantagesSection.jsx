function AdvantagesSection({ advantagesSection }) {
  const imageUrl =
    `http://localhost:1337${advantagesSection?.image?.data?.attributes?.formats?.large?.url}` ??
    '';

  return (
    <section id="sportsCenter" className="containe mx-auto mt-20 max-w-7xl">
      <div className="container mx-auto flex flex-col px-6 pb-32 pt-24 md:flex-row md:space-x-16">
        <div className="w-full">
          <img src={imageUrl} alt="Centre Sportif" className="mb-10 rounded-md opacity-90" />
        </div>
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="w-7/10 sub-title pb-10 text-6xl font-bold">
              {advantagesSection.title}
            </h4>
            <p className="text-md w-full text-justify text-slate-500 md:text-lg">
              {advantagesSection.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;
