import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  postComment = async () => {
    this.setState({ elementId: this.props.asin });
    let response = await fetch(API_URL + this.props.asin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZDA4YjY4MzQzMTAwMTRkZWE3OGQiLCJpYXQiOjE2ODA1Mjc0OTksImV4cCI6MTY4MTczNzA5OX0.Zg-_qRAESiz64rLknV3mP89OJYAHFfGo8EY6TkaugrU",
      },
      body: JSON.stringify(this.state),
    });
    return response.json();
  };

  render() {
    return (
      <Form onSubmit={this.postComment}>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your comment"
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="number"
            min={0}
            max={5}
            placeholder="0 - 5"
            onChange={(e) => this.setState({ rate: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Commenta
        </Button>
      </Form>
    );
  }
}

export default AddComment;
