import Keyboard from "./components/keyboard";
import Word from "./components/word";
import wordsList from "./assets/wordList.json";
import { useEffect, useState } from "react";

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

const hangman = [
  <div className="head"></div>,
  <div className="torso"></div>,
  <div className="right-arm"></div>,
  <div className="left-arm"></div>,
  <div className="right-leg"></div>,
  <div className="left-leg"></div>,
];

function App() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const getWord = () => {
    return wordsList[Math.floor(Math.random() * wordsList.length)];
  };

  const [currentWord, setCurrentWord] = useState<string>(getWord());

  const addLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    if (!currentWord.includes(letter)) setIncorrectGuesses((prev) => prev + 1);
    setGuessedLetters([...guessedLetters, letter]);
  };

  const resetGame = () => {
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setCurrentWord(getWord());
  };

  useEffect(() => {
    const keyboardhandler = (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key.match("[A-Za-z]")) {
        addLetter(e.key);
        console.log(guessedLetters);
      }
      if (e.key === "Enter") {
        resetGame();
      }
    };

    document.addEventListener("keypress", keyboardhandler);

    return () => {
      document.removeEventListener("keypress", keyboardhandler);
    };
  });

  return (
    <div className="container">
      <div className="game-state">
        {incorrectGuesses === 6 ? (
          <button onClick={() => resetGame()}>"You lost! Click here or press Enter to restart!"</button>
        ) : currentWord
            .split("")
            .every((letter) => guessedLetters.includes(letter)) ? (
          <button onClick={() => resetGame()}>"You win! Press Enter to restart!"</button>
        ) : (
          "Keep going!"
        )}
      </div>
      <Keyboard
        title="Vowels"
        letters={vowels}
        guessedLetters={guessedLetters}
        addLetter={addLetter}
      />
      <div className="hangman-container">
        <div className="top-mast"></div>
        <div className="noose-top"></div>
        {hangman.slice(0, incorrectGuesses).map((letter, index) => letter)}
        <div className="mast"></div>
        <div className="floor"></div>
        <Word
          currentWord={currentWord}
          gameState={{ guessedLetters, incorrectGuesses }}
        />
      </div>
      <Keyboard
        title="Consonants"
        letters={consonants}
        guessedLetters={guessedLetters}
        addLetter={addLetter}
      />
    </div>
  );
}

export default App;
