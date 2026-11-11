import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <section className="container">
            <Link to="/">Login</Link>
            <Link to="/sobre">Sobre</Link>
        </section>
    </nav>
  )
}
