import './App.css';
import Home from './components/Home';
import HorizontalScroller from './components/HorizontalScroller';
import About from './components/About';
import OurGoals from './components/OurGoals';

function App() {
  return (
    <>
    <div className="App">
    <Home/>
    <HorizontalScroller/>
    <About/>
    <OurGoals/>
    </div>
    <div>hello</div>
    </>
  );
}

export default App;
