function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        SIH
      </div>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#how-it-works">How it works</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="learn-btn">
        Get Started ↗
      </button>

    </nav>
  );
}

export default Navbar;