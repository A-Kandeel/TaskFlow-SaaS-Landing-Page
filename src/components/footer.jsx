import Logo from "./logo";

const Footer = () => {
  return ( 
    <footer id="Contact">
      <div className="footer-grid container">
        <div className="col01">
          <Logo />
          <p className="desc">The AI-powered workspace for teams that want to move faster.</p>
        </div>
        <div className="col col02">
          <p>Product</p>
          <ul>
            <li><a href="#Features">Features</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#FAQ">FAQ</a></li>
          </ul>
        </div>
        <div className="col col03">
          <p>Company</p>
          <ul>
            <li><a href="#Hero">About</a></li>
            <li><a href="#Hero">Careers</a></li>
            <li><a href="#Hero">Blog</a></li>
          </ul>
        </div>
        <div className="col col04">
          <p>Resources</p>
          <ul>
            <li><a href="#Hero">Docs</a></li>
            <li><a href="#Contact">Support</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="copy-right container">
        <p>© 2026 TaskFlow. Concept project.</p>
        <ul>  
          <li><i className="fab fa-brands fa-instagram"></i></li>
          <li><i className="fab fa-brands fa-facebook"></i></li>
          <li><i className="fab fa-brands fa-twitter"></i></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;