const Hero = () => {
  return (
    <section className="w-full flex flex-col min-h-screen gap-10 max-container bg-hero bg-no-repeat bg-right">
      <div className="relative xl:w-3/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-60">
      <h1 className="text-5xl font-bold leading-snug">
          Innovating <span className="bg-gradient-to-r from-cyan to-green text-transparent bg-clip-text">Chemistry</span> 
          <br /> <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">Synthesizing</span> Solutions
      </h1>
      <p className="text-2xl px-0 py-8 xl:w-4/5">
        Solvetera is a web application designed to <strong>simplify and optimize solvent selection</strong> for industrial chemical processes. 
        Harnessing advanced predictive modeling and machine learning, our tool identifies the ideal ionic liquid for a specific reaction, 
        <strong> reducing trial-and-error costs and environmental impact</strong>.
      </p>
      </div>
      <div className="flex justify-center w-full sm:padding-x flex-wrap">
      <h2 className="font-dmsans font-semibold italic text-4xl bg-gradient-to-r from-cyan to-darkblue text-transparent bg-clip-text relative">
        Ready to unlock a smarter path to green chemistry?
        <span className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-cyan to-darkblue"></span>
      </h2>
      </div>
    </section>
  )
}

export default Hero