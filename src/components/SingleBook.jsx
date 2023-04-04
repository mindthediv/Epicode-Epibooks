import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
    asin: this.props.asin,
  };

  getSelected = (e) => {
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  };

  render() {
    return (
      <div
        className={
          this.state.selected
            ? "h-100 border border-3 border-danger"
            : "h-100 border-0"
        }
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.img}
            onClick={this.getSelected}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
          {this.state.selected && (
            <CommentArea
              selected={this.state.selected}
              asin={this.state.asin}
            />
          )}
        </Card>
      </div>
    );
  }
}

export default SingleBook;
