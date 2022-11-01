import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Hero, Testimonials, } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden  ">
    <div className={`${styles.paddingX} ${styles.flexCenter} pt-7`}>
      <div className={`${styles.boxWidth} navbar_back  fixed`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`hero_custom`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;