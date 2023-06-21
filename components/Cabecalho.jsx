import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home"><img
        alt=""
        src="Stop Violence (1).png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        />{' '}
          Stop Violence
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Info</Nav.Link>
            <NavDropdown title="Mais" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">ONU Mulheres</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Como falar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Como saber 
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Ligue 180
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavScrollExample;