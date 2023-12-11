import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <Link to="/" className="text-dark text-decoration-none">
        <h4 className="my-0 mr-md-auto fw-bold">R.D.7</h4>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to="/" className="me-3 py-2 text-dark text-decoration-none">
          Home
        </Link>
        <Link to="/about" className="me-3 py-2 text-dark text-decoration-none">
          About
        </Link>
        <Link
          to="/contact"
          className="me-3 py-2 text-dark text-decoration-none"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
