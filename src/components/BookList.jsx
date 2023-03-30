import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Component } from "react";
import fantasy from "../Data/fantasy.json";
let arrayX = fantasy;

class BookList extends Component {
  state = {
    searchValue: "",
  };

  render() {
    return (
      <Container>
        <Row className="visualizer">
          <h2 className="text-bg-info sticky-top">TOP FANTASY</h2>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
            }}
          >
            <input
              type="search"
              placeholder="Cerca"
              className="form-control mb-4"
              onChange={(ev) => {
                ev.preventDefault();
                this.setState({
                  searchValue: ev.target.value,
                });
                arrayX = arrayX.filter((el) =>
                  el.title.startsWith(this.state.searchValue)
                );
                console.log(this.state.searchValue);
              }}
            ></input>
          </form>
          {arrayX.map((el, n) => {
            return (
              <Col key={"book-" + n} xs={12} md={4} lg={3}>
                <SingleBook key={"book-" + n} img={el.img} title={el.title} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
