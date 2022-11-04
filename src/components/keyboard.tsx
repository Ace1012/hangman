interface KeyboardProps {
  title: string;
  letters: string[];
  guessedLetters:string[];
  addLetter:(letter:string) => void
}

const Keyboard = ({ title, letters, guessedLetters, addLetter }: KeyboardProps) => {
  return (
    <div className="keyboard">
      <h1>{title}</h1>
      <div className="keyboard-btns">
        {letters.map((letter, index) => (
          <button
            key={index}
            disabled = {guessedLetters.includes(letter) ? true : false}
            className="keyboard-btn"
            onClick={() => addLetter(letter)}
            style={guessedLetters.includes(letter) ? {
              opacity:"0.3",
              filter:" blur(1px)"
            } : {}}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
