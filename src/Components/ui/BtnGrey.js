import React from "react";
import styled from "styled-components";

const BtnGrey = ({ text, func }) => {
  return <Container onClick={func}>{text}</Container>;
};

export default BtnGrey;

const Container = styled.button`
  color: white;
  background: #444546;
  padding: 12px 11px;
  border: none;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;

  :hover {
    background: #303131;
  }
`;
