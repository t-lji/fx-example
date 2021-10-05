import React from "react";
import { Box, Button, Header, Segment, Text, TextArea } from '@fluentui/react-northstar';
import TextareaAutosize from 'react-textarea-autosize';
import TextAreaAutoResizeCode from '!!raw-loader!../../../assets/code/prototypes/texts/TextAreaAutoResizeCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function TextAreaAutoResize(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="TextArea Autosize" />

      <Collapse>
        <Code code={ TextAreaAutoResizeCode } />
      </Collapse>
      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <Text>Using <code>react-textarea-autosize</code> to allow auto size</Text>
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
        <ul id="TextsList">
          <li><Button onClick={ () => ScrollToAnchor('TextAreaAutoResize') }>Text Area Autosize</Button></li>
        </ul>
        <ComponentPrototype title="Text">
          <TextAreaAutoResize id="TextAreaAutoResize" />
        </ComponentPrototype>
      </Box>
    )
  }
}