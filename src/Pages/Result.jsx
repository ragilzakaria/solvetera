import { useState } from "react";

import '../index.css';
import ResultCard from "../components/ResultCard";

const Result = () => {
  return (
    <main className="relative">
      <section className="min-h-screen">
        <ResultCard/>
      </section>
    </main>
  )
}

export default Result
