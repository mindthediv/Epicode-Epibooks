import Card from "react-bootstrap/Card";

function SingleBook(prop) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
