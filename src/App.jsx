import { Hero, Footer, Advantages, AboutUs, HowItWorks  } from "./sections";
import Nav from'./components/Nav';
import './index.css';


const App = () => (
  <main className="relative">
    <Nav />
    <section className="padding-x pt-5">
      <Hero />
    </section>
    <section className="padding bg-howitworks">
      <HowItWorks />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Advantages />
    </section>
    <section className="padding bg-aboutus">
      <AboutUs />
    </section>
    <section className="padding-x padding-t pb-8 bg-grey">
      <Footer />
    </section>
  </main>
);

export default App;