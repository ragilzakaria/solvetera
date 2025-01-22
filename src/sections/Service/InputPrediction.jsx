import SolventForm from "../../components/SolventForm";

const InputPrediction = () => {
    return (
        <section className="bg-inputform bg-no-repeat min-h-fit max-xl:padding-x pb-56 px-16">
            <div className="flex justify-center items-center max-container py-16">
                <h1 className="text-4xl font-bold leading-snug">
                Let's Start The{" "}
                <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
                    Prediction!
                </span>
                </h1>
            </div>
            <div className="">
                <SolventForm />
            </div>
        </section>
    );
  };
  
export default InputPrediction;