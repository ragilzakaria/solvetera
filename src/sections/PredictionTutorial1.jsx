//Was: Hero.jsx

const PredictionTutorial1 = () => {
  return (
    <section className="w-full flex flex-col min-h-screen gap-10 max-container bg-PredictionTutorial1 bg-no-repeat bg-right">
      <div className="relative xl:w-3/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-60">
        <h1 className="text-5xl font-bold leading-snug">
          Your Green Chemistry Journey{" "}
          <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
            Starts Here
          </span>
        </h1>

        <p className="text-lg text-black mt-10">
          Add your{" "}
          <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
            Chemical Properties
          </span>{" "}
          such as Reaction Type, Reactants, and other details listed below.
        </p>
      </div>

      <div className="flex justify-center items-center w-full mt-10">
        <img
          src="/PredictionTutorialShape.png"
          alt="Prediction Tutorial Shape"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="relative xl:w-3/5 flex flex-col justify-start items-start w-full max-xl:padding-x">
        <p className="text-lg text-black mt-10">
          Hit the{" "}
          <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
            Find My Solvent
          </span>{" "}
          button and let Solvetera do the magic!
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="flex justify-center w-full sm:padding-x flex-wrap">
        <h2 className="font-dmsans font-semibold italic text-4xl bg-gradient-to-r from-cyan to-darkblue text-transparent bg-clip-text relative">
          Ready to unlock a smarter path to green chemistry?
          <span className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-cyan to-darkblue"></span>
        </h2>
      </div>
    </section>
  );
};

export default PredictionTutorial1;
