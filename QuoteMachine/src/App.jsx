import { useState } from "react";
import MainCard from "./MainCard/MainCard";
import "./App.css";

const quotes = [
  "The two enemies of human happiness are pain and boredom.",
  "Happiness comes from... some curious adjustment to life.",
];
function App() {
  const [colour, setColour] = useState("pink");
  const [quote, setQuote] = useState(quotes[0]);

  function handleButtonClick(e) {
    e.preventDefault();
    let randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
    getQuote();
    setColour(randomColour);
  }

  function getQuote() {
    let index = Math.floor(Math.random() * quotes.length);
    console.log(index);
    setQuote(quotes[index]);
  }

  return (
    <div
      style={{ backgroundColor: colour, height: "100vh", width: "100vw" }}
      className="container"
    >
      <MainCard
        currentQuote={quote}
        handleButtonClick={handleButtonClick}
        currentColour={colour}
      />
    </div>
  );
}

export default App;
