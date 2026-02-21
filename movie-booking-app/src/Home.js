import avengers from "./images/avengers.jpg";
import batman from "./images/batman.jpg";
import spiderman from "./images/spiderman.jpg";
import joker from "./images/joker.jpg";
import inception from "./images/inception.jpg";
import titanic from "./images/titanic.jpg";
import avatar from "./images/avatar.jpg";
import ironman from "./images/ironman.jpg";
import thor from "./images/thor.jpg";
import blackpanther from "./images/blackpanther.jpg";
import frozen from "./images/frozen.jpg";
import minions from "./images/minions.jpg";
import harrypotter from "./images/harrypotter.jpg";
import lionking from "./images/lionking.jpg";
import fastfurious from "./images/fastfurious.jpg";
import { useNavigate } from "react-router-dom";

const movies = [
  { id: 1, title: "Avengers", image: avengers },
  { id: 2, title: "Batman", image: batman },
  { id: 3, title: "Spiderman", image: spiderman },
  { id: 4, title: "Joker", image: joker },
  { id: 5, title: "Inception", image: inception },
  { id: 6, title: "Titanic", image: titanic },
  { id: 7, title: "Avatar", image: avatar },
  { id: 8, title: "Iron Man", image: ironman },
  { id: 9, title: "Thor", image: thor },
  { id: 11, title: "Black Panther", image: blackpanther },
  { id: 12, title: "Frozen", image: frozen },
  { id: 13, title: "Minions", image: minions },
  { id: 14, title: "Harry Potter", image: harrypotter },
  { id: 15, title: "Lion King", image: lionking },
  { id: 16, title: "Fast & Furious", image: fastfurious },
];
function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Movie Booking</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.title} width="150" />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;