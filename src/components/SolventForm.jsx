import React, { useState } from "react";

const SolventForm = () => {
  const [reactant1, setReactant1] = useState("");
  const [reactant2, setReactant2] = useState("");
  const [reactionType, setReactionType] = useState("");
  const [catalyst, setCatalyst] = useState("");
  const [temperature, setTemperature] = useState("");
  const [pressure, setPressure] = useState("");
  const [polarity, setPolarity] = useState("");
  const [result, setResult] = useState(null); // For storing results

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reactant1) {
      alert("Please enter at least one reactant.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/api/find-ionic-liquid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reaction_type: reactionType,
          reactants: `${reactant1}${reactant2 ? ` + ${reactant2}` : ""}`,
          catalyst: catalyst || null,
          reaction_temperature: parseFloat(temperature),
          pressure: parseFloat(pressure),
          polarity: parseFloat(polarity),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.suitable_ionic_liquids); // Set result from backend response
      } else {
        alert(data.error || "An error occurred while processing your request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while connecting to the server.");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-white rounded-3xl shadow-md">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Reaction Type */}
        <div className="flex flex-col items-center">
          <label className="font-bold mb-2 text-lg">Reaction Type</label>
          <select
            className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
            value={reactionType}
            onChange={(e) => setReactionType(e.target.value)}
            required
          >
            <option value="" disabled>
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

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Catalyst</label>
            <input
              type="text"
              placeholder="Input Catalyst"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
              value={catalyst}
              onChange={(e) => setCatalyst(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Temperature (°C)</label>
            <input
              type="number"
              placeholder="Input Temperature"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Pressure (Pa)</label>
            <input
              type="number"
              placeholder="Input Pressure"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
              value={pressure}
              onChange={(e) => setPressure(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Polarity</label>
            <input
              type="number"
              placeholder="Input Polarity"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg"
              value={polarity}
              onChange={(e) => setPolarity(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            className="bg-teal-500 text-white font-bold py-2 px-6 rounded-md hover:bg-teal-600 text-xl"
            type="submit"
          >
            Find My Solvent
          </button>
        </div>
      </form>

      {/* Display Results */}
      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md">
          <h2 className="font-bold text-lg mb-2">Suitable Ionic Liquids:</h2>
          <ul>
            {result.map((liquid) => (
              <li key={liquid.id}>
                <strong>{liquid.name}</strong> - Melting Point: {liquid.melting_point}°C, Water Solubility: {liquid.water_solubility}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SolventForm;