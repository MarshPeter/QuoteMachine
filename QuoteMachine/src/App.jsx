import { useState } from "react";
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
    <div style={{ backgroundColor: colour, height: "100vh", width: "100vw" }}>
      <button onClick={handleColourChange}>Click me!</button>
    </div>
  );
}

export default App;
