import React from "react";
import { Box, Header, Segment, TextArea } from '@fluentui/react-northstar';
import TextareaAutosize from 'react-textarea-autosize';

export default function TextAreaAutoResize() {
  return (
    <Box>
      <Header as="h4" content="TextArea Autosize" />

      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <p>Using <code>react-textarea-autosize</code> to allow auto size</p>
        </Segment>
        <Segment><TextArea as={TextareaAutosize} /></Segment>
      </Box>
    </Box>
  )
}