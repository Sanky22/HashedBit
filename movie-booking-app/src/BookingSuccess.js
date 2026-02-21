import { useLocation, useNavigate } from "react-router-dom";

function BookingSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No booking data found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  const bookingId = "BOOK" + Math.floor(Math.random() * 1000000);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🎉 Seat Booked Successfully!</h1>

      <h2 style={{ marginTop: "20px" }}>Booking ID: {bookingId}</h2>

      <div style={{ marginTop: "30px" }}>
        <p><strong>Movie:</strong> {data.movie}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Mobile:</strong> {data.mobile}</p>
      </div>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default BookingSuccess;