import metrixaLogo from "../assets/metrixa-logo.png";

interface HomeProps {
  onScan: () => void;
  onHome: () => void;
}

function Home({ onScan, onHome }: HomeProps) {
  return (
    <div className="home">

      {/* NAVBAR */}

      <nav className="navbar">

        <button
          className="brand-button"
          onClick={onHome}
          aria-label="Go to Home"
        >
          <img
            src={metrixaLogo}
            alt="METRIXA"
            className="brand-logo"
          />
        </button>

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <button
            className="nav-scan-button"
            onClick={onScan}
          >
            Scan Item ↗
          </button>

        </div>

      </nav>


      {/* HERO */}

      <main id="home">

        <section className="hero">

          <h1>
            Know what you're buying.
            <br />
            Before you buy it.
          </h1>

          <p className="hero-description">
            Scan an item and get clear information
            about it instantly.
          </p>

          <button
            className="scan-button"
            onClick={onScan}
          >
            📷 Scan Item
          </button>

        </section>


        {/* FEATURES */}

        <section
          className="features"
          id="about"
        >

          <div className="feature-card">

            <div className="feature-icon">
              📷
            </div>

            <h3>
              Quick Scanning
            </h3>

            <p>
              Scan a product using your camera
              or upload an existing image.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🔍
            </div>

            <h3>
              Smart Analysis
            </h3>

            <p>
              Our system extracts useful information
              from the scanned product.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ✓
            </div>

            <h3>
              Clear Results
            </h3>

            <p>
              Get the information you need in a
              simple and easy-to-understand format.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;