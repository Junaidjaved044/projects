function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="small-text">
          SMART INDIA HACKATHON
        </p>

        <h1>
          Solving real problems.
          <br />
          Building smarter solutions.
        </h1>

        <p className="hero-description">
          A modern digital platform designed to make
          our solution simple, accessible and efficient.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Platform ↗
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-visual">

        <div className="dashboard-preview">

          <div className="preview-top">
            <span>Dashboard</span>
            <span>Overview</span>
          </div>

          <div className="big-stat">
            <span>78%</span>
            <p>Efficiency Improvement</p>
          </div>

          <div className="graph">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;