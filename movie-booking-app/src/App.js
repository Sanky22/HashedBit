import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import BookingForm from "./BookingForm";
import BookingSuccess from "./BookingSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/success" element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;