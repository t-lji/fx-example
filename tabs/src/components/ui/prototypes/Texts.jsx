import React from "react";
import { Box, Button, Header, Segment, TextArea } from '@fluentui/react-northstar';
import TextareaAutosize from 'react-textarea-autosize';
import TextAreaAutoResizeCode from '!!raw-loader!../../../assets/code/prototypes/texts/TextAreaAutoResizeCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function TextAreaAutoResize() {
  return (
    <Box>
      <Header as="h4" content="TextArea Autosize" />

      <Collapse>
        <Code code={ TextAreaAutoResizeCode } />
      </Collapse>
      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <p>Using <code>react-textarea-autosize</code> to allow auto size</p>
        </Segment>
        <Segment><TextArea as={TextareaAutosize} /></Segment>
      </Box>
    </Box>
  )
}

export default class Texts extends React.Component {
  render() {
    return (
      <Box className="Texts page">
        <Header as="h2" content="Texts" />
        <ul id="TextsList">
          <li><Button onClick={ () => ScrollToAnchor('TextAreaAutoResize') }>Text Area Autosize</Button></li>
        </ul>
        <Box id="TextAreaAutoResize"><TextAreaAutoResize /></Box>
      </Box>
    )
  }
}