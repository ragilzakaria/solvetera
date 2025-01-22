import { Link } from "react-router-dom";

const MockForm = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-white rounded-3xl shadow-md">
      <form className="space-y-6">
        {/* Reaction Type */}
        <div className="flex flex-col items-center">
          <label className="font-bold mb-2 text-lg">Reaction Type</label>
          <select
            className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
            disabled
          >
            <option value="substitution" selected>
              Substitution Reactions
            </option>
          </select>
        </div>

        {/* Input Fields in 3x2 Matrix Style */}
        <div className="grid grid-cols-3 gap-6">
          {/* Reactant 1 */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Reactant 1</label>
            <input
              type="text"
              value="CH3Cl"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Reactant 2 */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Reactant 2</label>
            <input
              type="text"
              value="NaOH"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Catalyst */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Catalyst</label>
            <input
              type="text"
              value=""
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Temperature */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Temperature (°C)</label>
            <input
              type="text"
              value="25°C"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Pressure */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Pressure (Pa)</label>
            <input
              type="number"
              value="101.325"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Polarity */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Polarity</label>
            <input
              type="number"
              value="8"
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <button
            className="bg-teal-500 text-white font-bold py-2 px-6 rounded-md hover:bg-teal-600 text-xl"
            type="button"
            disabled
          >
            Find My Solvent
          </button>
        </div>
      </form>
    </div>
  );
};

export default MockForm;
