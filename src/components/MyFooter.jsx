import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function MyFooter() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12}>MyFooter</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
