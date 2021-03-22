import styled from "styled-components";
import Header from "./Components/Header";
import CodeContainer from "./Components/CodeContainer";
import { useState, useEffect } from "react";
import Render from "./Components/Render";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [renderDoc, setRenderDoc] = useState("");

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

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container>
      <Header />
      <CodeContainer
        setRenderDoc={setRenderDoc}
        html={html}
        setHtml={setHtml}
        css={css}
        setCss={setCss}
        js={js}
        setJs={setJs}
      />
      <Render renderDoc={renderDoc} />
    </Container>
  );
}

export default App;

const Container = styled.div``;
