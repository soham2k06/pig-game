import { useEffect, useState } from "react";
import Player from "./Player";

function App() {
  const [scores, setScores] = useState([0, 0]);
  const [curScore, setCurScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [dice, setDice] = useState(5);

  const [settings, setSettings] = useState({
    player1: "player 1",
    player2: "player 2",
    target: 100,
  });
  const { target } = settings;

  function init() {
    setScores([0, 0]);
    setCurScore(0);
    setActivePlayer(0);
    setPlaying(true);
  }

  function handleSwitchPlayer() {
    setCurScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  }

  function handleDiceRoll() {
    if (!playing) return;
    setDice(() => {
      const newDice = Math.trunc(Math.random() * 6) + 1;
      if (newDice !== 1) setCurScore((prev) => prev + newDice);
      else handleSwitchPlayer();
      return newDice;
    });
  }

  function handleHold(e) {
    if (!playing) return;
    const newScores = [...scores];
    newScores[activePlayer] += curScore;
    setScores(newScores);
    handleSwitchPlayer();
  }

  useEffect(() => {
    if (scores.some((score) => score >= target)) setPlaying(false);
  }, [scores, target]);

  return (
    <div className="main">
      <Player
        activePlayer={activePlayer}
        curScore={curScore}
        player={{
          id: 0,
          name: settings.player1,
        }}
        scores={scores}
        target={target}
        playing={playing}
      />
      <Player
        activePlayer={activePlayer}
        curScore={curScore}
        player={{
          id: 1,
          name: settings.player2,
        }}
        scores={scores}
        target={target}
        playing={playing}
      />

      {scores.every((score) => score <= target) && (
        <img
          src={`dice-${dice}.png`}
          alt="Playing dice"
          className={`dice ${
            !playing || curScore === 0 ? "dice-disabled" : ""
          }`}
        />
      )}
      <button className="btn btn--new" onClick={init}>
        🔄 New game
      </button>

      <button className="btn btn--roll" onClick={handleDiceRoll}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </div>
  );
}

export default App;
