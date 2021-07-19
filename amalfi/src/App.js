import NavHead from "./components/NavHead";
import TopBanner from "./components/TopBanner";
import Price from "./components/Price";



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
    </div>
  );
}

export default App;
