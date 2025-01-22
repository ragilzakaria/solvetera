import Tutorial from '../sections/Service/Tutorial';
import InputPrediction from '../sections/Service/InputPrediction';
import Tutorial2 from '../sections/Service/Tutorial2';

const Service = () => {
  return (
    <main className="relative">
      <section className="">
        <Tutorial />
      </section>
      <section>
        <Tutorial2/>
      </section>
      <section className='px-40'>
        <InputPrediction />
      </section>
    </main>
  )
}

export default Service