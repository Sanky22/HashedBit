import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function BookingForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state?.movie || "Selected Movie";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !mobile) {
      alert("Please fill all fields");
      return;
    }

    navigate("/success", {
      state: {
        name,
        email,
        mobile,
        movie,
      },
    });
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Book Seat for {movie}</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ margin: "10px", padding: "8px", width: "250px" }}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "10px", padding: "8px", width: "250px" }}
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Enter Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={{ margin: "10px", padding: "8px", width: "250px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;