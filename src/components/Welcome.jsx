import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Welcome() {
  return (
    <Container fluid className="text-bg-primary">
      <Row>
        <Col>
          <h1>EpiBooks</h1>
          <h2>Tutta un'altra storia</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
