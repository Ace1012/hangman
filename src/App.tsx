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

  const [currentWord, setCurrentWord] = useState<string>(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  // const addLetter = useCallback((letter:string) => {
  //   if(guessedLetters.includes(letter)) return
  //   setGuessedLetters([...guessedLetters, letter])
  // },[guessedLetters])

  const addLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    if (!currentWord.includes(letter)) setIncorrectGuesses((prev) => prev + 1);
    setGuessedLetters([...guessedLetters, letter]);
  };

  const hangman = [
    <div className="head"></div>,
    <div className="torso"></div>,
    <div className="right-arm"></div>,
    <div className="left-arm"></div>,
    <div className="right-leg"></div>,
    <div className="left-leg"></div>,
  ];

  return (
    <div className="container">
      <div className="game-state">
        {incorrectGuesses === 6
          ? "You lost!"
          : currentWord
              .split("")
              .every((letter) => guessedLetters.includes(letter))
          ? "You win!"
          : "Keep going!"}
      </div>
      <Keyboard title="Vowels" letters={vowels} addLetter={addLetter} />
      <div className="hangman-container">
        <div className="top-mast"></div>
        <div className="noose-top"></div>
        {hangman.slice(0, incorrectGuesses).map((l, index) => l)}
        <div className="mast"></div>
        <div className="floor"></div>
        <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      </div>
      <Keyboard title="Consonants" letters={consonants} addLetter={addLetter} />
    </div>
  );
}

export default App;
