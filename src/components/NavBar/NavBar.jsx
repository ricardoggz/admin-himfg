import { Link } from 'react-router-dom'
import {
    Container,
    Nav,
    Navbar,
    Offcanvas
} from 'react-bootstrap'

export const NavBar = ({children})=>{
    return (
        <Navbar bg="light" expand="xxl">
          <Container fluid>
            <Navbar.Brand href="#">Administrativo HIMFG</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xxl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    { children }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}