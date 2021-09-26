import React from "react";
import { AcceptIcon, Button, ClipboardCopiedToIcon, Provider, teamsTheme } from "@fluentui/react-northstar";
import copy from 'copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

// provide code highlighting
function Highlight(props) {
  return (
    <Provider theme={teamsTheme} styles={{ backgroundColor: "#eeeeee" }}>
      <SyntaxHighlighter 
        language={ props.language === 'json' ? 'json' : 'jsx' }
        showLineNumbers={true}
        style={ coy }
        wrapLines={true}
        wrapLongLines={true}>
          {props.code.replace(/^\s+|\s+$/g, '')}
      </SyntaxHighlighter>
    </Provider>
  )
}

// provide copy code components
export default function Code(props) {
  const [isCopied, setIsCopied] = React.useState(false);
  const code = props.language === 'json' ? JSON.stringify(props.code, null, '\t') : props.code;

  return (
    <div>
      <Button 
        icon={ isCopied ? <AcceptIcon /> : <ClipboardCopiedToIcon /> } 
        content="click to copy code" 
        onClick={ () => { copy(code) ? 
          setIsCopied(true) || setTimeout(() => { setIsCopied(false) }, 1000) : 
          alert('error, please copy with your mouse or keyboard') }} />
      <Highlight code={ code } language={ props.language } />
    </div>
  )
}
