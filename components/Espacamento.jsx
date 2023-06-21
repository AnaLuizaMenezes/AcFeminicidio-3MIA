import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function Espacamento() {
  return (
    <>
      <Navbar bg="light" variant="dark" >
        <Container>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Novidades</Nav.Link>
            <Nav.Link href="#precos">Preços</Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Espacamento;