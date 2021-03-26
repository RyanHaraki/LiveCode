import React from "react";
import styled from "styled-components";

const Component = ({ setTheme }) => {
  const onChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
  };

  return (
    <Container>
      <select onChange={onChange}>
        <option value="monokai">Monokai</option>
        <option value="textmate">Textmate</option>
        <option value="terminal">Terminal</option>
        <option value="solarized_dark">Solarized Dark</option>
      </select>
    </Container>
  );
};

export default Component;

const Container = styled.div`
  select {
    text-align-last: center;
    border: none;
    background: #101326;
    color: white;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    padding: 12px 11px;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;

    :hover {
      background: #141830;
    }
  }
`;
