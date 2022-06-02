import React from "react";
import { Card } from "react-bootstrap";

export default function CardItem({ robot }) {
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img
        variant="top"
        src={`https://robohash.org/${robot.id}?size=200x200`}
      />
      <Card.Body>
        <Card.Title>{robot.name}</Card.Title>
        <Card.Title>{robot.email}</Card.Title>
      </Card.Body>
    </Card>
  );
}
