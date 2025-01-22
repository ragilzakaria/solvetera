import React from 'react'
import MockResult from '../../components/MockResult'

const Tutorial2 = () => {
  return (
    <section className="w-full flex flex-col gap-6 max-container pb-32">
      {/* Background Wrapper that starts after title */}
      <div className="w-full mt-6 bg-tutorial2 bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center w-full max-xl:padding-x min-h-screen"> {/* Ensure full height */}
          <p className="text-2xl font-semibold text-black mt-6 w-2/3 text-center">
            Here we can see the displayed personalized{" "}
            <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
              Solvent Outcome
            </span>{" "}
            based on your input followed by the solvent’s description!
          </p>
          <div className="flex justify-center items-center w-full">
            <MockResult />
          </div>
          <p className="text-2xl font-semibold text-black mt-6 w-2/3 text-center">
            Hit the{" "}
            <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
              Try Again
            </span>{" "}
            button to go back!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Tutorial2
