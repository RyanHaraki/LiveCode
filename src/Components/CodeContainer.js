import React from "react";
import Editor from "./Editor";
import { monokai, solarizedDark, terminal, textmate } from "./ui/themes";
import styled from "styled-components";

const CodeContainer = ({ setHtml, setCss, setJs, setRenderDoc, theme }) => {
  let currentTheme = monokai;

  if (theme === "textmate") {
    currentTheme = textmate;
  } else if (theme === "solarized_dark") {
    currentTheme = solarizedDark;
  } else if (theme === "terminal") {
    currentTheme = terminal;
  }

  return (
    <Container background={currentTheme}>
      <Editor
        setHtml={setHtml}
        setRenderDoc={setRenderDoc}
        languageName="html"
        theme={theme}
      />
      <Editor
        setCss={setCss}
        setRenderDoc={setRenderDoc}
        languageName="css"
        theme={theme}
      />
      <Editor
        setJs={setJs}
        setRenderDoc={setRenderDoc}
        languageName="javascript"
        theme={theme}
      />
    </Container>
  );
};

export default CodeContainer;

const Container = styled.div`
  background: ${(currentTheme) => currentTheme.background};
  height: 40vh;
  border-bottom: 4px #211e1c solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
`;
