import React from "react";
import { Card } from "react-bootstrap";

function CardUser({ user }) {
  console.log(user);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
         {user.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardUser;
