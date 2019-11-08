import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const NewButton = styled(Button)`
  background-color: red;
  font-size: 20px;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;

  &:hover {
    border: 1px solid red;
    color: red;
    background-color: white;
  }

`;

function StyledButton(props) {
  return <NewButton onClick={() => props.handleClick()}>Next Page</NewButton>;
}

export default StyledButton;
