interface KeyboardProps {
  title: string;
  letters: string[];
}

const Keyboard = ({ title, letters }: KeyboardProps) => {
  return (
    <div className="keyboard">
      <h1>{title}</h1>
      <div className="keyboard-btns">
        {letters.map((l, index) => (
          <button key={index} className="keyboard-btn" onClick={() => console.log(l)}>{l}</button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
