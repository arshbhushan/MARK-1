import './App.css';
import Home from './components/Home';
import HorizontalScroller from './components/HorizontalScroller';
import About from './components/About';
import OurGoals from './components/OurGoals';
import OurProduct from './components/OurProduct.js';
import Footer from './components/Footer.js';
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
    </div>
    </>
  );
}

export default App;
