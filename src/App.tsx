import Keyboard from "./components/keyboard";
import Word from "./components/word";
import wordsList from "./assets/wordList.json";
import { useState } from "react";

function App() {
  const vowels = ["a", "e", "i", "o", "u"];

  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const getWord = () => {
    return wordsList[Math.floor(Math.random() * wordsList.length)];
  };

  const [currentWord, setCurrentWord] = useState(getWord());

  return (
    <div className="container">
      <div className="game-state">On-going</div>
      <Keyboard title="Vowels" letters={vowels} />
      <div className="hangman-container">
        <div className="top-mast"></div>
        <div className="noose-top"></div>
        <div className="head"></div>
        <div className="torso"></div>
        <div className="right-arm"></div>
        <div className="left-arm"></div>
        <div className="right-leg"></div>
        <div className="left-leg"></div>
        <div className="mast"></div>
        <div className="floor"></div>
        <Word currentWord={currentWord} />
      </div>
      <Keyboard title="Consonants" letters={consonants} />
    </div>
  );
}

export default App;
