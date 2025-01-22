import { stepBySteps } from "../constants"
import BlueStar from "../assets/icon/BlueStar.svg"

const HowItWorks = () => {
  return (
    <section className="w-full flex flex-col min-h-screen gap-10 max-container py-16">
        <h1 className="text-4xl font-bold text-center">
          How <span className="bg-gradient-to-r from-cyan via-green to-darkblue text-transparent bg-clip-text">Solvetera</span> Works
        </h1>
        <div className="flex flex-col justify-start gap-10">
          {stepBySteps.map((item, index) => (
            <div key={index} className="flex flex-col gap-5">
              <div className="flex flex-row items-center gap-4">
                <img src={BlueStar} height={35} width={35}/>
                <h2 className="text-[32px] font-extrabold pl-16 bg-gradient-to-r from-cyan to-mediumblue text-transparent bg-clip-text">{item.label}</h2>
              </div>  
              <p className="text-2xl pl-[113px] font-bold">{item.description}</p>
              {index < stepBySteps.length - 1 && (
                <div className="border-l-2 border-black h-full ml-4"></div>
              )}
            </div>
          ))}
        </div>
    </section>
  )
}

export default HowItWorks
