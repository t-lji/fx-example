import React from "react";
import { Box, Header, Segment, SplitButton, Text, TextArea } from '@fluentui/react-northstar';
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

export default function Texts() {
  const menu = [
    {
      key: 'TextAreaAutoResize',
      content: 'Text Area Autosize',
    },
  ]
  return (
    <ComponentPrototype title="Text">
      <SplitButton
        menu={ menu }
        button={{
          content: 'Go To',
          'aria-roledescription': 'splitbutton',
          'aria-describedby': 'instruction-message-primary-button',
        }}
        primary
        toggleButton={{
          'aria-label': 'more options',
        }}
        onMenuItemClick= { (e, { index }) => ScrollToAnchor(menu[index].key) }
      />
      <TextAreaAutoResize id="TextAreaAutoResize" />
    </ComponentPrototype>
  )
}