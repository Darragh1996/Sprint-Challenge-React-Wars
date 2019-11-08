import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  max-width: 600px;
  padding: 5px 10px;
  margin: 15px auto;
  border-radius: 10px;
  opacity: 0.8;
  box-sizing: border-box;
  text-align: center;

  & h1 {
    color: lightblue;
  }
`;

function Card(props) {
  return (
    <Container>
      <h1>{props.name}</h1>
      <p>Born: {props.birth_year}</p>
      <p>Gender: {props.gender}</p>
      <p>Eye Color: {props.eye_color}</p>
      <p>Hair Color: {props.hair_color}</p>
    </Container>
  );
}

export default Card;
