interface KeyboardProps {
  title: string;
  letters: string[];
  addLetter:(letter:string) => void
}

const Keyboard = ({ title, letters, addLetter }: KeyboardProps) => {
  return (
    <div className="keyboard">
      <h1>{title}</h1>
      <div className="keyboard-btns">
        {letters.map((letter, index) => (
          <button
            key={index}
            className="keyboard-btn"
            onClick={() => addLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
