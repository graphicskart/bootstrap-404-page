import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export default class NotFound extends Component {
  render() {
    return (
      <Col xs={12} className="text-center">
        <Row>
          <Col xs={12}>
            <img src={require("../assets/img/img.png")} />
          </Col>
          <Col xs={12}>
            <p className="text">it looks like you are lost...</p>
          </Col>
          <Col xs={12}>
            <Button variant="outline-primary">Back to Home</Button>
          </Col>
        </Row>
      </Col>
    );
  }
}
