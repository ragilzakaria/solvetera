import { Hero, Footer, Advantages, AboutUs, HowItWorks  } from "./sections";
import Nav from'./components/Nav';
import './index.css';


const App = () => (
  <main className="relative">
    <Nav />
    <section className="padding-x pt-5">
      <Hero />
    </section>
    <section className="padding">
      <HowItWorks />
    </section>
    <section className="w-full">
      <Advantages />
    </section>
    <section className="padding-x">
      <AboutUs />
    </section>
    <section className="padding-x padding-t pb-8 bg-grey">
      <Footer />
    </section>
  </main>
);

export default App;