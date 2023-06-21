import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function rodape() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link>Todas as informações que você precisa. Fique segura! </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default rodape;