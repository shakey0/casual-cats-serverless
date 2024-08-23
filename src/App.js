import React from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const mockData = {};

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
      <div class="main-container">
        <h1>{formattedCatName}</h1>
        <hr />
        <div class="info-container">
          <div class="left-container">
            <h2 class="no-mgn-top s-mgn-bottom about-title">
              About {formattedCatName}
              <p className="date-sentence">
                {formattedCatName} was born on DATE_HERE
              </p>
              <p className="sm-v-mgn">DESCRIPTION_HERE</p>
            </h2>
          </div>
          <div class="right-container">
            <div class="image-container">
              <img src={`images/${catName}.jpg`} alt={formattedCatName} />
            </div>
          </div>
        </div>
        <hr />
        <div class="album-container">
          <h2 class="no-mgn-top width-100">{formattedCatName}'s Albums</h2>
          <div class="albums"></div>
        </div>
      </div>
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
