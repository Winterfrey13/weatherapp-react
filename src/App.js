import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello World <Weather city="Paris" />
        </h1>
      </header>
    </div>
  );
}

export default App;
