import React from "react";
import "./App.css";
import Header from "./components/Header";
import CarList from "./components/CarList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CarList />
      </main>
    </div>
  );
}

export default App;
