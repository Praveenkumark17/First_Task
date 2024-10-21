import './App.css';
import About from './Components/about';
import Home from './Components/home';

function App() {
  const name = 'Praveenkumar';
  const age  = 23;
  return (
    <div className="app">
      <Home name={name}/>
      <About age={age}/>
    </div>
  );
}

export default App;
