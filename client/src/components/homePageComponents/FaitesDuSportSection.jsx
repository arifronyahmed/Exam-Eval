const baseUrl = 'http://localhost:1337';

function FaitesDuSportSection({ faitesDuSportSection }) {
  const imageUrl1 =
    faitesDuSportSection?.image1?.data?.attributes?.formats?.medium?.url;

  return (
    <div className="container m-10 mx-auto max-w-7xl">
      <div className="flex flex-row">
        <div className="flex w-1/2 flex-col">
          <h3 className="peach-gradient text-6xl font-bold">
            {faitesDuSportSection?.titleSection}
          </h3>
          {faitesDuSportSection?.faitesDuSportText?.map((item) => (
            <div key={item.id} className="mt-10 flex flex-row">
              <div className="mr-5 text-5xl font-bold text-slate-700">
                {item.listNumber}.
              </div>
              <div>
                <h4 className="dark-bold-text text-5xl">{item.title}</h4>
                <div className="mt-6 w-2/3">
                  <p className="px-2 text-justify text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <img src={`${baseUrl}${imageUrl1}`} />
          </div>
          <div>
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaitesDuSportSection;
