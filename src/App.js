import './App.css';
import Home from './components/Home';
import HorizontalScroller from './components/HorizontalScroller';
import About from './components/About';
import OurGoals from './components/OurGoals';
import OurProduct from './components/OurProduct.js';
import Footer from './components/Footer.js';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

function App() {
  return (
    <>
    <div className="App">
    <Home/>
    <HorizontalScroller/>
    <About/>
    <OurGoals/>
    <OurProduct/>
    <Footer/> 
    <WhatsAppWidget phoneNumber="+918570848341" />
    </div>
    </>
  );
}

export default App;


























