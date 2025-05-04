export default function Keyboard({ onLetterClick, guessedLetters }) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="keyboard">
      {letters.map(letter => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          disabled={guessedLetters.includes(letter)}
          className={`letter-button ${guessedLetters.includes(letter) ? 'guessed' : ''}`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
