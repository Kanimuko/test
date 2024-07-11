import './App.css';
import Price from "./components/price";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Price min={-10} max={10000000}/>
      </header>
    </div>
  );
}

export default App;