import { useParams, useNavigate } from "react-router-dom";

const movies = [
  { id: 1, title: "Avengers", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Batman", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Spiderman", image: "https://via.placeholder.com/300" },
  { id: 4, title: "Joker", image: "https://via.placeholder.com/300" },
  { id: 5, title: "Inception", image: "https://via.placeholder.com/300" },
  { id: 6, title: "Titanic", image: "https://via.placeholder.com/300" },
  { id: 7, title: "Avatar", image: "https://via.placeholder.com/300" },
  { id: 8, title: "Iron Man", image: "https://via.placeholder.com/300" },
  { id: 9, title: "Thor", image: "https://via.placeholder.com/300" },
  { id: 11, title: "Black Panther", image: "https://via.placeholder.com/300" },
  { id: 12, title: "Frozen", image: "https://via.placeholder.com/300" },
  { id: 13, title: "Minions", image: "https://via.placeholder.com/300" },
  { id: 14, title: "Harry Potter", image: "https://via.placeholder.com/300" },
  { id: 15, title: "Lion King", image: "https://via.placeholder.com/300" },
  { id: 16, title: "Fast & Furious", image: "https://via.placeholder.com/300" },
];

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{movie.title}</h1>

      <img src={movie.image} alt={movie.title} />

      <p style={{ marginTop: "20px" }}>
        This is a great movie. Click below to book your seat.
      </p>

      <button
        onClick={() => navigate("/book", { state: { movie: movie.title } })}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;