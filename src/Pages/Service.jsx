import Tutorial from '../sections/Service/Tutorial';
import InputPrediction from '../sections/Service/InputPrediction';

const Service = () => {
  return (
    <main className="relative">
      <section className="">
        <Tutorial />
      </section>
      <section className='px-40'>
        <InputPrediction />
      </section>
    </main>
  )
}

export default Service