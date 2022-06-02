import React from "react";
import CardItem from "./CardItem";
import { Container, Row } from "react-bootstrap";

export default function CardList({ robots }) {
  return (
    <Container>
      <Row>
        {robots.map((robot) => {
          return <CardItem robot={robot} key={robot.id} />;
        })}
      </Row>
    </Container>
  );
}
