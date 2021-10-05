import React, { useState } from "react";
import { Box, Button, Divider, Grid, Ref, Text, Tooltip, QnaIcon } from '@fluentui/react-northstar'

export default function TooltipItem(props) {
  const [target, setTarget] = useState(null)
  return (
    <Box>
      <Grid columns="auto 1fr">
      {/* CUSTOM DOM ELEMENT is used as target for Tooltip */}
      <Tooltip
        target={target}
        trigger={
          <Button
            icon={<QnaIcon />}
            circular
            styles={{
              cursor: 'pointer',
            }}
          />
        }
        content="well, yes, I am just a garbish text ¯\_(ツ)_/¯"
        position="below"
      />
        <Box
          style={{
            marginLeft: 10,
          }}
        >
          <Text>Could you guess what does this text means? :)</Text>
          <Divider />
          <Ref innerRef={setTarget}>
            <Text>
              "To the lascivious looking-glass I, that love's majesty to strut before a want love's
              majesto, to the souls of York."
            </Text>
          </Ref>
        </Box>
      </Grid>
    </Box>
  )
}