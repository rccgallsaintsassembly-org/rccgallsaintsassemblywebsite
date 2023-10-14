import Footer from "components/common/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import classes from "./Home.module.scss";
import FirstTimer from "./components/FirstTimer/FirstTimer";

function Home() {
  return (
    <div className={classes.homeContainer}>
      <WelcomeSection />
      <AboutUs />
      {/* <FirstTimer /> */}
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home