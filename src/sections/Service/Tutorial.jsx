import MockForm from "../../components/MockForm";

const Tutorial = () => {
    return (
      <section className="w-full flex flex-col gap-10 max-container">
        <div className="flex flex-col justify-center items-center w-full max-xl:padding-x pt-12">
          <h1 className="text-4xl font-bold leading-snug">
            Your Green Chemistry Journey{" "}
            <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
              Starts Here
            </span>
          </h1>
        </div>

        {/* Background Wrapper that starts after title */}
        <div className="w-full pb-32 bg-tutorial1 bg-no-repeat bg-top bg-bg-cover mt-10" style={{ backgroundSize: "90%" }}>
          <div className="flex flex-col justify-center items-center w-full max-xl:padding-x">
            <p className="text-2xl font-semibold text-black mt-32">
              Add your{" "}
              <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
                Chemical Properties
              </span>{" "}
              such as Reaction Type, Reactants, and other details listed below.
            </p>
          
          </div>
          <div className="flex justify-center items-center w-full mt-10">
          <MockForm />
        </div>

        <div className="relative flex flex-col justify-center items-center w-full max-xl:padding-x">
          <p className="text-2xl font-semibold text-black mt-10">
            Hit the{" "}
            <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text text-2xl">
              Find My Solvent
            </span>{" "}
            button and let Solvetera do the magic!
          </p>
        </div>
        </div>
      </section>
    );
};

export default Tutorial;
