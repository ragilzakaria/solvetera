import React from 'react'
import flask from '../assets/icon/Flask.png'

const MockResult = () => {
    return (
      <section className="w-full flex flex-col items-center justify-start p-6">
        <div className="bg-white shadow-md rounded-3xl p-8 w-full max-w-5xl text-center">
          {/* Header */}
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-red-500 text-3xl">🔥</span>
            <span className="text-gray-600 text-3xl">☠️</span>
          </div>
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan to-mediumblue bg-transparent bg-clip-text mb-4">
            Dimethyl sulfoxide
          </h1>
          {/* Content */}
          <div className="flex justify-between items-start my-6 mx-18">
            {/* Flask on the left */}
            <div className="relative flex justify-center items-end w-1/4">
              <img src={flask} alt={`flask icon`} className="w-35 hover:scale-110 transition-transform" />
            </div>
            {/* Properties List in the middle */}
            <ul className="text-xl text-center space-y-2 justify-center items-center mx-auto w-1/2">
              <li><span className="font-semibold">Reaction Type:</span> Substitution Reaction</li>
              <li><span className="font-semibold">Reactant:</span> CH3Cl, NaOH</li>
              <li><span className="font-semibold">Catalyst:</span> None</li>
              <li><span className="font-semibold">Temperature:</span> 25°C</li>
              <li><span className="font-semibold">Pressure:</span> 101,325 Pa</li>
              <li><span className="font-semibold">Polarity:</span> 8</li>
            </ul>
            {/* Flask on the right */}
            <div className="relative flex justify-center items-end w-1/4">
              <img src={flask} alt={`flask icon`} className="w-35 hover:scale-110 transition-transform" />
            </div>
          </div>
          {/* Footer */}
          <button className="italic w-1/3 text-gray-600 text-xl bg-white p-3 rounded-lg justify-self-center border-gray-400 border-2">
            Not what you're looking for? <span className="text-cyan-600 font-bold">Try Again!</span>
          </button>
        </div>
      </section>
    );
};

export default MockResult;
