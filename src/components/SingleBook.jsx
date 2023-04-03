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
      e.target.className = "border border-3 border-danger";
    } else {
      this.setState({ selected: false });
      e.target.className = "border-0";
    }
  };

  render() {
    return (
      <div className="h-100" onClick={this.getSelected}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
          <CommentArea selected={this.state.selected} asin={this.state.asin} />
        </Card>
      </div>
    );
  }
}

export default SingleBook;
