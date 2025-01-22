import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ResultCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from a database
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getReactionData"); // Replace with your actual API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full flex items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold text-red-600">
          Error loading data. Please try again.
        </p>
      </div>
    );
  }

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
            <option value={data.reactionType} selected>
              {data.reactionType}
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
              value={data.reactant1}
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Reactant 2 */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Reactant 2</label>
            <input
              type="text"
              value={data.reactant2}
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Catalyst */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Catalyst</label>
            <input
              type="text"
              value={data.catalyst || "None"}
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Temperature */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Temperature (°C)</label>
            <input
              type="text"
              value={data.temperature}
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Pressure */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Pressure (Pa)</label>
            <input
              type="number"
              value={data.pressure}
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Polarity */}
          <div className="flex flex-col items-center">
            <label className="font-bold mb-2 text-lg">Polarity</label>
            <input
              type="number"
              value={data.polarity}
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg bg-gray-100"
              readOnly
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="bg-teal-500 text-white font-bold py-2 px-6 rounded-md hover:bg-teal-600 text-xl"
          >
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResultCard;
