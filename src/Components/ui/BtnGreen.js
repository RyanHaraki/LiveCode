import React from "react";
import styled from "styled-components";

const BtnGreen = ({ text, func }) => {
  return <Container onClick={func}>{text}</Container>;
};

export default BtnGreen;

const Container = styled.button`
  color: black;
  background: #47cf73;
  padding: 12px 11px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;

  :hover {
    background: #31ad58;
  }
`;
