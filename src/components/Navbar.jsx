import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-space-betten">
          {/* Links */}
          
        <div className="nv">
          <Link to="/" className="text-white ms-3 text-decoration-none">🏠Home</Link>

          <Link to="/Contacto" className="text-white ms-3 text-decoration-none">📒Contacto</Link>
        </div>
        <div className="nv-2">
          <Navbar.Brand>🎂Happy cake</Navbar.Brand>
        </div>
        </Container>
      </Navbar>
    </>
  );
}
