import { useState } from "react";
import MainCard from "./MainCard/MainCard";
import "./App.css";

function App() {
  const [colour, setColour] = useState("black");

  function handleColourChange(e) {
    e.preventDefault();
    let randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColour);

    setColour(randomColour);
  }

  return (
    <div
      style={{ backgroundColor: colour, height: "100vh", width: "100vw" }}
      className="container"
    >
      <MainCard handleColourChange={handleColourChange} />
    </div>
  );
}

export default App;
