function Player({ activePlayer, scores, curScore, player, target, playing }) {
  return (
    <section
      className={`player ${
        activePlayer === player.id && playing ? "player--active" : ""
      } ${scores[player.id] >= target ? "player--winner" : ""}`}
    >
      <h2 className="name">{player.name}</h2>
      <p className="score">{scores[player.id]}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">
          {activePlayer === player.id ? curScore : 0}
        </p>
      </div>
    </section>
  );
}

export default Player;
