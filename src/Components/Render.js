import React from "react";
import styled from "styled-components";

const Render = ({ renderDoc }) => {
  return (
    <Container>
      <div className="bottom">
        <div className="render-wrapper">
          <div className="render">
            <iframe srcDoc={renderDoc} width="100%" height="100%" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Render;

const Container = styled.div`
  height: 430px;

  iframe {
    border: none;
  }

  .bottom {
    display: flex;
    height: 50vh;
  }

  .render-wrapper {
    flex-grow: 1;
    overflow: hidden;
  }

  .render {
    height: 100% !important;
  }
`;
