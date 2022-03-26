import './App.css';
import Instruments from './components/Instruments/Instruments';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div>
      <h1 className="text-center mt-3">Your Favourite Instrument Shop</h1>

      <Instruments></Instruments>
      <Questions></Questions>
    </div>
  );
}

export default App;
