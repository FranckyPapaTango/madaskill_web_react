import "./Footer2.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer2 = () => {
  return (
    <footer className="footer2">
      <Container>
        <Row>
          <Col className="text-center py-3 copyrights">Copyright &copy; Société François Yvon RAFARALAHY
          <br/>( Rafaros-IT - 12/12/2022)
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer2;
