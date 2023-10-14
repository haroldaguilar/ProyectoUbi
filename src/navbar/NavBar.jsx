import {Link} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
 
  return (
    <>
      <Navbar ClassName="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/login">Iniciar Sesión</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/contenido1">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/contenido2">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contenido3">Registro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar