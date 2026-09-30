import Button from "./button";

const NavBar = () => {
  return (
    <header className="nav-wrap">
      <nav className="navbar container">
        <a href="#home" className="logo">
          <span className="brand-mark">T</span>
          <span className="brand">TaskFlow</span>
        </a>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <div className="btn-box">
          <a className="login" href="#contact">Log In</a>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;