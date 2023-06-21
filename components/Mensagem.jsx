import Toast from 'react-bootstrap/Toast';

function Mensagem() {
  return (
    <Toast>
      <Toast.Header>
        <img src="Stop Violence (1).png/20x20?text=%20" className="rounded me-1" alt="" />
        <strong className="me-auto">Oi Guerreira!</strong>
        <small>1 mins ago</small>
      </Toast.Header>
      <Toast.Body>Como você está? Precisa de ajuda?</Toast.Body>
    </Toast>
  );
}

export default Mensagem;