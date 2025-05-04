export default function GameStatus({ status, word, onRestart }) {
  return (
    <div className="game-status">
      {status === 'won' && (
        <div>
          <h2>You Won!</h2>
          <p>The word was: {word}</p>
        </div>
      )}
      
      {status === 'lost' && (
        <div>
          <h2>You Lost!</h2>
          <p>The correct word was: {word}</p>
        </div>
      )}
      
      <button onClick={onRestart} className="restart-button">
        Restart Game
      </button>
    </div>
  );
}
