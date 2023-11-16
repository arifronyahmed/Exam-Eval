function FaitesDuSportSection({ faitesDuSportSection }) {
  return (
    <div className="container m-10 mx-auto w-4/5">
      <div className="flex flex-row">
        <div className="flex w-3/5 flex-col">
          <h3 className="text-6xl font-bold text-turquoise">
            {faitesDuSportSection?.titleSection}
          </h3>
          {faitesDuSportSection?.faitesDuSportText?.map((item) => (
            <div key={item.id} className="mt-10 flex flex-row">
              <div className="text-6xl font-bold">{item.listNumber}.</div>
              <div>
                <h4 className="text-6xl font-bold">{item.title}</h4>
                <div className="mt-6">
                  <p className="px-2 text-slate-500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaitesDuSportSection;
