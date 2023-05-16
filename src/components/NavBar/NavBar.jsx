import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas
} from 'react-bootstrap'

export const NavBar = ()=>{
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
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Button variant='success'>
                      Agregar nuevo curso
                    </Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}