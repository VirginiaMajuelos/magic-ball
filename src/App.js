import "./styles/App.scss";
import magicBall from "./assets/magicBall.png";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [randomIndex, setRandomIndex] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const handleClick = () => {
    if (userInput) {
      setError("");
      setRandomIndex(Math.round(Math.random() * 20));
      setUserInput("");
    } else {
      setError("Enter a question to know the answer!");
    }
  };

  const possibleAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Most likely",
    "Outlook not so good",
    "Very doubtful",
  ];

  const answer = possibleAnswers[randomIndex];
  return (
    <div className="app__container">
      <h1>Magic Ball 8</h1>
      <p clssName="app__container--question">
        Ask me a question and Click de ball...
      </p>
      <input
        type="text"
        className="App__input"
        value={userInput}
        onChange={handleChange}
      />
      {/* <div className="eight-ball"> */}
      <div className="text__content" onClick={handleClick}>
        <img className="text__content--img" src={magicBall} alt="magic ball" />
        {error ? (
          <p className="text__content--error">{error}</p>
        ) : answer ? (
          <p className="text__content--answer">"{answer}"</p>
        ) : null}
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
