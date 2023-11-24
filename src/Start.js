import { useState } from "react";

function Start({ settings, setSettings, setPlaying }) {
  const [formData, setFormdata] = useState(settings);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata({ ...settings, [name]: value });
  }
  function hanldeSubmit(e) {
    e.preventDefault();
    setSettings(formData);
    setPlaying(true);
  }

  return (
    <form action="#" className="form" id="form1" onSubmit={hanldeSubmit}>
      <h2 className="form-title">Set players name and winning target</h2>
      <div className="input-container">
        <input
          name="player1"
          type="text"
          placeholder="Player 1 name"
          className="input"
          value={formData.player1}
          onChange={handleChange}
        />
        <input
          name="player2"
          type="text"
          placeholder="Player 2 name"
          className="input"
          value={formData.player2}
          onChange={handleChange}
        />
        <input
          name="target"
          type="number"
          placeholder="Winning target"
          className="input"
          value={formData.target}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn-normal"
        disabled={Object.values(formData).length === 0}
      >
        Start Game
      </button>
    </form>
  );
}

export default Start;
