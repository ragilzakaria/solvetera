import { Hero, Nav, Footer, Advantages, AboutUs, HowItWorks  } from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wdie:padding-r padding-b bg-hero">
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