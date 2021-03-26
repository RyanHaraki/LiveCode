import React, { useState } from "react";
import AceEditor from "react-ace";

// Languages
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
// Themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_dark";

// Tools
import "ace-builds/src-noconflict/ext-language_tools";
//Other
import styled from "styled-components";

const Editor = ({ languageName, setHtml, setCss, setJs, theme }) => {
  const [warning, setWarning] = useState(false);

  const onChange = (e) => {
    // Update code
    if (languageName === "html") {
      setHtml(e);
    } else if (languageName === "css") {
      setCss(e);
    } else {
      setJs(e);
    }

    // Warn user that HTML boilerplate is not requried
    if (e.match("<html>") && warning === false) {
      alert(
        "Hey there! No need for any HTML boilerplate. We've already taken care of that for you :)"
      );
      setWarning(true);
    }
  };

  return (
    <Container>
      <EditorHead>
        {languageName === "javascript"
          ? languageName.charAt(0).toUpperCase() + languageName.slice(1)
          : languageName.toUpperCase()}
      </EditorHead>
      <AceEditor
        mode={languageName}
        theme={`${theme}`}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        width="95%"
        fontSize={14}
        height="100%"
        defaultValue={localStorage.getItem(languageName)}
        setOptions={{
          enableLiveAutocompletion: true,
        }}
      />
    </Container>
  );
};

export default Editor;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const EditorHead = styled.div`
  height: 20px;
  width: 95%;
  background: #131416;
  color: white;
  padding: 3px 0;
  text-align: center;
  cursor: default;
  color: #555555;
  font-weight: 600;
`;
