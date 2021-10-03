import React, { useState } from "react";
import { Box, Divider, RadioGroup } from '@fluentui/react-northstar'

export default function RadioGroupItem() {
  const [selectedValue, setselectedValue] = useState('pink');
  return (
    <Box>
      The selected value is: {selectedValue}
      <Divider />
      <RadioGroup
        defaultCheckedValue="pink"
        items={['pink', 'blue', 'green', 'red', 'orange'].map(color => ({
          key: color,
          value: color,
          name: color,
          'aria-label': color,
          variables: {
            indicatorColorDefault: color,
            indicatorBackgroundColorChecked: color,
            indicatorBorderColorDefaultHover: color,
          },
        }))}
        onCheckedValueChange={(e, props) => setselectedValue(props.value)
        }
      />
    </Box>
  )
}