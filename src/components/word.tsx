interface WordProps {
  currentWord: string;
  guessedLetters:string[]
}

const Word = ({ currentWord, guessedLetters }: WordProps) => {
  return (
    <div className="word">
      {currentWord.split("").map((l, index) => (
        <span key={index} style={{
            borderBottom:"1px solid black",
            width:"30px"
        }}>
          <span style={{
            visibility: guessedLetters.includes(l) ? "visible" : "hidden",
            textTransform:"uppercase",
            display:"flex",
            justifyContent:"center"
          }}>{l}</span>
        </span>
      ))}
    </div>
  );
};

export default Word;
