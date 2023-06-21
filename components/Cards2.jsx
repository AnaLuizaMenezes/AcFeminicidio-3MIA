import Card from 'react-bootstrap/Card';

function Cards2() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="cafe.jpg" />
        <Card.Body>
          <Card.Text>
            Nossos funcionarios trabalham de forma excelente. Trazendo o melhor para você 
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Todos os nossos pães são caseiros. Você vai adorar!
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="sla.jpg" />
      </Card>
    </>
  );
}

export default Cards2;