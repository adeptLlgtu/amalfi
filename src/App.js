import NavHead from "./components/NavHead";
import TopBanner from "./components/TopBanner";
import Price from "./components/Price";
import SalonVideo from "./components/SalonVideo";
import Garanties from "./components/Garanties";
import Services from "./components/Services";
import Care from "./components/Care";
import OurWorks from "./components/OurWorks";
import Battle from "./components/Battle";
import Recension from "./components/Recension";
import Gifts from "./components/Gifts";



import './App.scss';
import './assets/fonts/igrasans/igrasans.css'
import './assets/fonts/manrope/manrope.css'
import './assets/fonts/Montserrat/stylesheet-montserrat.css'

function App() {
  return (
    <div className="App">
      <NavHead></NavHead>
        <TopBanner></TopBanner>
        <Price></Price>
      <SalonVideo></SalonVideo>
        <Garanties></Garanties>
        <Services></Services>
        <Care></Care>
        <OurWorks></OurWorks>
      <Battle></Battle>
        <Recension></Recension>
        <Gifts></Gifts>
    </div>
  );
}

export default App;
