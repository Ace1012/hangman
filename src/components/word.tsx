interface WordProps {
  currentWord: string;
  gameState: {
    guessedLetters: string[];
    incorrectGuesses: number;
  };
}

const Word = ({ currentWord, gameState }: WordProps) => {
  return (
    <div className="word">
      {currentWord.split("").map((l, index) => (
        <span
          key={index}
          style={{
            borderBottom: "1px solid black",
            width: "30px",
          }}
        >
          <span
            style={{
              visibility:
                gameState.guessedLetters.includes(l) ||
                gameState.incorrectGuesses === 6
                  ? "visible"
                  : "hidden",
              textTransform: "uppercase",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {l}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Word;
