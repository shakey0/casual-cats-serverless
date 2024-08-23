import React from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const formatCatName = (name) => {
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(" And ", " & ");
};

const Home = () => {
  const cats = ["sophie", "amber", "reggie_and_tank", "prince_albert"];

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our static website.</p>
      <h2>Our Cats</h2>
      <div className="home-cats">
        {cats.map((cat) => (
          <div key={cat}>
            <Link to={`/cat/${cat}`} className="home-cat">
              {formatCatName(cat)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <div>
    <h1>About Us</h1>
    <p>Learn more about our company and mission.</p>
  </div>
);

const Cat = () => {
  const { catName } = useParams();
  const formattedCatName = formatCatName(catName);
  return (
    <div>
      <h1>{formattedCatName}</h1>
      <p>
        This is the page for {formattedCatName}. Here you can add specific
        information about this cat.
      </p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" className="home-link">
          Home
        </Link>
        <Link to="/about" className="about-link">
          About
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat/:catName" element={<Cat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
