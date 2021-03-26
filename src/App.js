import styled from "styled-components";
import Header from "./Components/Header";
import CodeContainer from "./Components/CodeContainer";
import React, { useState, useEffect } from "react";
import Render from "./Components/Render";

function App() {
  const [html, setHtml] = useState(localStorage.getItem("html"));
  const [css, setCss] = useState(localStorage.getItem("css"));
  const [js, setJs] = useState(localStorage.getItem("javascript"));
  const [renderDoc, setRenderDoc] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  // Update Render template
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderDoc(`
      <html>
      <body>${html}<body/>
      <style>${css}<style/>
      <script>${js}<script/>
      </html>
      `);
    }, 250);
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("javascript", js);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container>
      <Header setTheme={setTheme} />
      <CodeContainer
        setRenderDoc={setRenderDoc}
        html={html}
        setHtml={setHtml}
        css={css}
        setCss={setCss}
        js={js}
        setJs={setJs}
        theme={theme}
      />
      <Render renderDoc={renderDoc} />
    </Container>
  );
}

export default App;

const Container = styled.div``;
