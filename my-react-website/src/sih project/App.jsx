import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <section className="stats">
        <div className="stat-card">
          <h2>78%</h2>
          <p>Efficiency Improvement</p>
        </div>

        <div className="stat-card">
          <h2>33</h2>
          <p>Regions Covered</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Platform Availability</p>
        </div>
      </section>
    </div>
  );
}

export default App;