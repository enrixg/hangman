export default function HangmanFigure({ wrongGuesses }) {
  return (
    <svg className="hangman-figure" viewBox="0 0 200 200">
      {/* Base */}
      {wrongGuesses >= 1 && <line x1="40" y1="180" x2="160" y2="180" className="figure-part" />}
      
      {/* Post */}
      {wrongGuesses >= 2 && (
        <>
          <line x1="70" y1="180" x2="70" y2="40" className="figure-part" />
          <line x1="70" y1="40" x2="130" y2="40" className="figure-part" />
          <line x1="130" y1="40" x2="130" y2="60" className="figure-part" />
        </>
      )}
      
      {/* Head */}
      {wrongGuesses >= 3 && <circle cx="130" cy="70" r="10" className="figure-part" />}
      
      {/* Body */}
      {wrongGuesses >= 4 && <line x1="130" y1="80" x2="130" y2="120" className="figure-part" />}
      
      {/* Arms */}
      {wrongGuesses >= 5 && (
        <>
          <line x1="130" y1="90" x2="110" y2="100" className="figure-part" />
          <line x1="130" y1="90" x2="150" y2="100" className="figure-part" />
        </>
      )}
      
      {/* Legs */}
      {wrongGuesses >= 6 && (
        <>
          <line x1="130" y1="120" x2="110" y2="140" className="figure-part" />
          <line x1="130" y1="120" x2="150" y2="140" className="figure-part" />
        </>
      )}
    </svg>
  );
}
