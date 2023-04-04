import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getComments = async () => {
    try {
      let response = await fetch(API_URL + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZDA4YjY4MzQzMTAwMTRkZWE3OGQiLCJpYXQiOjE2ODA1Mjc0OTksImV4cCI6MTY4MTczNzA5OX0.Zg-_qRAESiz64rLknV3mP89OJYAHFfGo8EY6TkaugrU",
        },
      });
      if (response.ok) {
        let commentsData = await response.json();
        this.setState({ comments: commentsData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />{" "}
        <CommentsList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
