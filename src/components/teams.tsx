function Teams() {
  return (
    <>
      <div className="inline-flex  bg-[#F2F4F7] py-20 px-20">
        <div className=" border-red-600 w-auto m-14">
          <h1 className="text-4xl font-bold ">Our team</h1>
          <h4 className="mt-5 text-slate-800">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </h4>
          <div className="flex w-auto items-center justify-between  mt-12">
            <div className="">
              <h1 className="text-5xl font-bold ">28</h1>
              <p className="mt-3 text-sm text-slate-600">team members</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold ">+100</h1>
              <p className="mt-3 text-sm text-slate-600">projects</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold ">7 years</h1>
              <p className="mt-3 text-sm text-slate-600"> in IT sphere</p>
            </div>
          </div>
          <h4 className="mt-12 text-slate-800">
            {`All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It's
            expensive but worth it.`}
          </h4>
        </div>
        <img
          src="IMG_6115-1.png"
          alt="image"
          className="mr-9 rounded-xl shadow-xl"
        />
      </div>
    </>
  );
}

export default Teams;
