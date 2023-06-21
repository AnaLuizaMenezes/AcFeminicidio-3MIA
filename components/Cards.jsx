import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="foto1.jpg" />
        <Card.Body>
          <Card.Title>Protestos</Card.Title>
          <Card.Text>
          Os protestos contra a violência contra a mulher são um momento de união, solidariedade e empoderamento. Mulheres corajosas compartilham suas histórias, inspirando outras a se levantarem e a exigirem um mundo mais seguro e justo. Essas manifestações são um lembrete de que a violência de gênero não pode mais ser ignorada, e que juntos podemos criar uma sociedade onde todas as mulheres possam viver livres de medo e violência.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Estamos juntas nessa.</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="foto2.jpg" />
        <Card.Body>
          <Card.Title>Diga não á violencia!</Card.Title>
          <Card.Text>
          Diga não à violência! Em um mundo onde a violência prevalece, é essencial levantarmos nossas vozes e recusarmos qualquer forma de agressão. Todos nós temos o poder e a responsabilidade de criar um ambiente seguro e harmonioso.

Dizer não à violência significa promover o respeito, a empatia e a tolerância. Significa tratar todas as pessoas com dignidade, independentemente de sua origem, gênero, orientação sexual ou qualquer outra característica. É um compromisso de construir relacionamentos saudáveis e uma sociedade mais justa.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Não tenha medo.</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="foto3.jpg" />
        <Card.Body>
          <Card.Title>Você não esta sozinha</Card.Title>
          <Card.Text>
          Lembre-se de que a luta contra a violência da mulher transcende fronteiras. Mesmo que a jornada possa parecer difícil, lembre-se de que você faz parte de uma irmandade global que busca justiça e igualdade. Juntas, podemos desafiar estereótipos, educar, denunciar e criar mudanças reais.

Saiba que a sua voz importa e que o seu relato é fundamental para ampliar a conscientização. Compartilhe suas experiências, busque ajuda e conecte-se com outros que estão na mesma luta. Unidos, podemos construir um mundo onde a violência contra as mulheres seja coisa do passado e onde todas as mulheres possam viver plenamente, com segurança e dignidade.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Peça ajuda! </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardExample;