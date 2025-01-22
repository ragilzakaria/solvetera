import { pros } from "../../constants";
import { Link } from "react-router";

const Advantages = () => {
  return (
    <section className="justify-center items-center max-container pb-40">
      <h1 className="text-4xl font-bold text-center mb-8">
        Get Started and You'll Have...
      </h1>
      <div className="grid grid-cols-3 gap-12 items-center justify-items-center py-12">
        {pros.map((item, index) => (
          <div
            key={item.label} // Use a unique key
            className={`flex flex-col items-center justify-center rounded-3xl h-28 w-60 shadow-xl ${
              index % 2 === 0
                ? "bg-mediumblue text-white hover:bg-gradient-to-r from-cyan to-blue hover:text-white"
                : "bg-green text-white hover:bg-gradient-to-r from-cyan to-blue hover:text-white"
            }`}
          >
            <h2 className="text-2xl font-semibold text-center">{item.label}</h2>
          </div>
        ))}
      </div>
      <Link to="/Service">
        <button className="flex justify-center items-center h-28 w-1/2 mx-auto rounded-3xl bg-mediumblue text-white py-5 text-3xl shadow-xl font-semibold
      hover:bg-gradient-to-r from-cyan via-blue to-darkblue transition-transform transform hover:scale-110">
        What's the wait? <br></br>Click here to start now!
        </button> 
      </Link>
    </section>
  );
};

export default Advantages;
