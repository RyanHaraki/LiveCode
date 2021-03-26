import React from "react";
import styled from "styled-components";
import BtnGreen from "./ui/BtnGreen";
import Dropdown from "./ui/Dropdown";

const Header = ({ setTheme }) => {
  return (
    <Container>
      <div className="left">LiveCode</div>

      <div className="right">
        <Dropdown setTheme={setTheme} />
        <BtnGreen text="Download" />
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  color: white;
  font-size: 1.4rem;
  height: 60px;
  background: #211e1c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;

  div {
    display: flex;
    align-items: center;
  }

  .right {
    * {
      margin-left: 15px;
    }
  }
`;
