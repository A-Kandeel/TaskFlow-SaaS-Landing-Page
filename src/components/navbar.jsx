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
          <li><a href="#Features">Features</a></li>
          <li><a href="#Pricing">Pricing</a></li>
          <li><a href="#FAQ">FAQ</a></li>
          <li><a href="#Contact">Contact</a></li>
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