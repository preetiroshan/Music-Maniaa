import { useState } from "react";
import "./styles.css";

const genreDictionary = {
  Patriotic: ["Mere Desh Ki Dharti", "Ae watan"],
  Romance: ["Tujhe Dekha Toh Ye Jaana", "Tum Hi Ho"],
  Chill: ["Khwabon ke Parindey", "Ik Tara"],
  Party: ["Koi Kahe Kehta Rahe", "Morni Banke"]
};
export default function App() {
  const genresOptions = Object.keys(genreDictionary);
  const [genre, setGenre] = useState("");
  const [songs, setSongs] = useState([]);

  const changeGenre = (genre) => {
    setGenre(genre);
    setSongs(genreDictionary[genre]);
  };

  const handleClear = () => setSongs([]);

  return (
    <div className="App">
      <div className="container">
        <header>
          <span role="img" aria-label="app-icon">
            🎶
          </span>{" "}
          Music Maniaa
        </header>
        <p>You select the genre and we pick the songs for you :)</p>
        <br />
        {genresOptions.map((item, key) => (
          <button
            key={key}
            onClick={() => changeGenre(item)}
            className={"genre " + (item === genre ? "selected" : "")}
          >
            {item}
          </button>
        ))}
        {songs.length ? (
          <>
            <div className="suggestion-container">
              {songs.map((song, key) => (
                <div key={key} className="song-row">
                  {song}
                </div>
              ))}
              <br />
              <button onClick={handleClear} className="clear">
                Clear suggestions
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
