import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">My Portfolio</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
}