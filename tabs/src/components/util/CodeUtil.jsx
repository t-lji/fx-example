import React from "react";
import { Button, Provider, teamsTheme } from "@fluentui/react-northstar";
import { ClipboardCopiedToIcon } from '@fluentui/react-icons-northstar'
import copy from 'copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

// provide code highlighting
function Highlight(props) {
  return (
    <Provider theme={teamsTheme} styles={{ backgroundColor: "#eeeeee" }}>
      <SyntaxHighlighter 
        language='jsx'
        showLineNumbers={true}
        style={ coy }
        wrapLines={true}
        wrapLongLines={true}>
          {props.children.replace(/^\s+|\s+$/g, '')}
      </SyntaxHighlighter>
    </Provider>
  )
}

// provide copy code components
export default function Code(props) {
  return (
    <div>
      <Button icon={ <ClipboardCopiedToIcon /> } content="click to copy code" 
        onClick={ () => {
          if (copy(props.code)) {
            alert('success')
          } else {
            alert('error, please copy with your mouse');
          }
        }} />
      <Highlight>{ props.code }</Highlight>
    </div>
  )
}