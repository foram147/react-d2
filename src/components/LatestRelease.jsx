import books from "../data/scifi.json";
import { Component } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

class LatestRelease extends Component {
  render() {
    return (
      <Container fluid="xl">
        <Row className="card-row">
          {books.map((book) => (
            <Col sm={6} lg={3}>
              <Card
                className=" mx-3 my-1 card-height"
                style={{ width: "15rem" }}
              >
                <Card.Img className="card-img" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {book.title}
                  </Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
