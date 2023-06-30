import { useContext } from 'react'
import {
    Container,
    Nav,
    Navbar,
    Offcanvas,
    Button
} from 'react-bootstrap'
import { UserContext } from '../../contexts'

export const NavBar = ({children})=>{
  const { logout }= useContext(UserContext)
    return (
        <Navbar className="shadow p-3 mb-5 bg-white rounded" expand="xxl">
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
                    <li>
                      <Button variant="danger" onClick={logout}>
                        Cerrar sesión
                      </Button>
                    </li>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}