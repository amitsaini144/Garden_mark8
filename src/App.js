import "./styles.css";
import React, { useState } from "react";

const flowerDictionary = {
  "🌹": " Rose",
  "🌺": "Hibiscus",
  "🌻": "Sun Flower",
  "🌼": "Blossom",
  "🌷": "Tulip",
  "🌸": "Cherry Blossom",
  "💮": "White Flower",
  "🏵️": "Rosette",
  "🥀": "Wilted Flower"
};

var arrayOfEmoji = Object.keys(flowerDictionary);

export default function App() {
  //useState1
  const [input, newInput] = useState("translation will appear here..");
  //useState2
  const [userData, newUserData] = useState("");

  function inputHandler(event) {
    var userTEXT = event.target.value;
    newUserData(userTEXT);

    if (flowerDictionary[event.target.value] === undefined) {
      newInput("Emoji not found !!");
    } else {
      var userInput = event.target.value;
      newInput(flowerDictionary[userInput]);
    }
  }

  function emojiClickHandler(event) {
    newInput(flowerDictionary[event]);
  }

  return (
    <div className="App">
      <h1>Garden</h1>
      <input
        id="userInput"
        placeholder="put the emoji here to see the translation"
        onChange={inputHandler}
      ></input>
      <h3>{userData}</h3>

      <h2>{input}</h2>
      <div class="flowers">
        {arrayOfEmoji.map(function (item) {
          return (
            <span
              key={item}
              onClick={() => emojiClickHandler(item)}
              class="flower"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
