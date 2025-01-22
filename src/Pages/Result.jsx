import { useState } from "react";
import ResultPage from '../sections/Result/ResultPage';

import '../index.css';

const Result = () => {
  return (
    <main className="relative">
      <section className="min-h-screen">
        <ResultPage/>
      </section>
    </main>
  )
}

export default Result