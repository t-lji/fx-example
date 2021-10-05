import React from "react";
import { Box, Header, Segment, Text, TextArea } from '@fluentui/react-northstar';
import TextareaAutosize from 'react-textarea-autosize';

export default function TextAreaAutoResize() {
  return (
    <Box>
      <Header as="h3" content="TextArea Autosize" />

      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <Text>Using <code>react-textarea-autosize</code> to allow auto size</Text>
        </Segment>
        <Segment><TextArea as={TextareaAutosize} /></Segment>
      </Box>
    </Box>
  )
}