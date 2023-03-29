import fantasy from "../Data/fantasy.json";
import history from "../Data/history.json";
import horror from "../Data/horror.json";
import romance from "../Data/romance.json";
import scifi from "../Data/scifi.json";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const allGenres = fantasy.concat(history, horror, romance, scifi);
console.log(allGenres);

function AllTheBooks() {
  return (
    <Container>
      <Row className="booksRow">
        {allGenres.map((book, n) => {
          return (
            <Col key={book.n} xs={12} md={4} lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}$</Card.Text>
                  <Button variant="primary">Leggi</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
