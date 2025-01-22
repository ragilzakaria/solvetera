import React, { useState } from "react";
import { Link } from "react-router-dom";

const SolventForm = () => {
  const [reactant1, setReactant1] = useState("");
  const [reactant2, setReactant2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reactant1) {
      alert("Please enter at least one reactant.");
      return;
    }
    console.log("Form submitted", { reactant1, reactant2 });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-white rounded-3xl shadow-md">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Reaction Type */}
        <div className="flex flex-col items-center">
          <label className="font-bold mb-2 text-lg">Reaction Type</label>
          <select
            className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
            required
          >
            <option value="" disabled selected>
              Choose Value
            </option>
            <option value="addition">Addition Reactions</option>
            <option value="elimination">Elimination Reactions</option>
            <option value="substitution">Substitution Reactions</option>
            <option value="pericyclic">Pericyclic Reactions</option>
            <option value="rearrangement">Rearrangement Reactions</option>
            <option value="photochemical">Photochemical Reactions</option>
            <option value="redox">Redox Reactions</option>
          </select>
        </div>

        {/* Input Fields in Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Reactant 1 */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Reactant 1</label>
            <input
              type="text"
              placeholder="Input Reactant 1"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
              value={reactant1}
              onChange={(e) => setReactant1(e.target.value)}
              required
            />
          </div>

          {/* Reactant 2 */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Reactant 2</label>
            <input
              type="text"
              placeholder="Input Reactant 2"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
              value={reactant2}
              onChange={(e) => setReactant2(e.target.value)}
            />
          </div>

          {/* Catalyst */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Catalyst</label>
            <input
              type="text"
              placeholder="Input Value"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
            />
          </div>

          {/* Temperature */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Temperature (°C)</label>
            <input
              type="text"
              placeholder="Input Value"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
              required
            />
          </div>

          {/* Pressure */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Pressure (Pa)</label>
            <input
              type="text"
              placeholder="Input Value"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
              required
            />
          </div>

          {/* Polarity */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Polarity</label>
            <input
              type="text"
              placeholder="Input Value"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
              required
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <Link to={"/Result"}>
            <button  className="bg-teal-500 text-white font-bold py-2 px-6 rounded-md hover:bg-teal-600 text-xl"
            type="submit">
                Find My Solvent
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SolventForm;
