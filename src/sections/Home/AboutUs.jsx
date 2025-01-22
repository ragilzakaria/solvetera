import { team } from "../../constants";
import nadine from "../../assets/images/nadine.png";
import raisa from "../../assets/images/raisa.png";
import mukti from "../../assets/images/mukti.png";
import lana from "../../assets/images/lana.png";


const AboutUs = () => {
  const teamImages = {
    nadine: nadine,
    raisa: raisa,
    mukti: mukti,
    lana: lana,
  }
  return (
    <section id="aboutus" className="w-full flex flex-col gap-10 max-container pb-16 bg-aboutus bg-center mb-10">
      <h1 className="text-4xl font-bold">
        About Us
      </h1>
      <p className="text-2xl font-medium">
      We are four students—two in computer science and two in chemistry—driven by a passion for sustainability and innovation. Combining AI expertise with green chemistry principles, we developed 
      <span className="text-green"> Solvetera</span> to simplify solvent selection and support industries in adopting eco-friendly solutions efficiently.
      </p>
      <div className="flex gap-3 mt-5 justify-between w-full">
        {team.map((member) => (
          <div key={member.image} className="flex">
            <img
              src={teamImages[member.label]} // Use static imports based on label
              alt={`${member.label} image`}
              className="w-30 h-30 hover:scale-110 transition-transform items-center"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutUs