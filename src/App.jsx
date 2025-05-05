import { useState, useEffect } from 'react';
import Keyboard from './components/Keyboard';
import WordDisplay from './components/WordDisplay';
import HangmanFigure from './components/HangmanFigure';
import GameStatus from './components/GameStatus';
import { wordList } from './utils/words';

export default function App() {
  const [secretWord, setSecretWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing'); // playing, won, lost

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setSecretWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus('playing');
  };

  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter) || gameStatus !== 'playing') return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!secretWord.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      
      if (newWrongGuesses >= 6) {
        setGameStatus('lost');
      }
    } else {
      // Check if all letters are guessed
      const allGuessed = secretWord.split('').every(letter => 
        newGuessedLetters.includes(letter)
      );
      if (allGuessed) {
        setGameStatus('won');
      }
    }
  };

  return (
    <div className="hangman-game">
      <h1>Hangman Game</h1>
      <div className="game-container">
        <div className="figure-container">
          <HangmanFigure wrongGuesses={wrongGuesses} />
        </div>
        <div className="word-container">
          <WordDisplay word={secretWord} guessedLetters={guessedLetters} />
        </div>
        <div className="keyboard-container">
          <Keyboard 
            onLetterClick={handleLetterClick} 
            guessedLetters={guessedLetters} 
          />
        </div>
        <div className="status-container">
          <GameStatus 
            status={gameStatus} 
            word={secretWord} 
            onRestart={startNewGame} 
          />
        </div>
      </div>
    </div>
  );
}
