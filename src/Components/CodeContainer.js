import React from "react";
import styled from "styled-components";
import Editor from "./Editor";

const CodeContainer = ({ setHtml, setCss, setJs, setRenderDoc }) => {
  return (
    <Container>
      <Editor
        setHtml={setHtml}
        setRenderDoc={setRenderDoc}
        languageName="html"
      />
      <Editor setCss={setCss} setRenderDoc={setRenderDoc} languageName="css" />
      <Editor
        setJs={setJs}
        setRenderDoc={setRenderDoc}
        languageName="javascript"
      />
    </Container>
  );
};

export default CodeContainer;

const Container = styled.div`
  background: #434647;
  height: 40vh;
  border-bottom: 4px #211e1c solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
`;
