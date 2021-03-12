import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Anime</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add Anime</Link>
      </div>
    </nav>
  );
};

export default Navbar;
