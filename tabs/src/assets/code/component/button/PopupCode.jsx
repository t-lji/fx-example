import React from "react";
import { Alert, Box, Button, MoreIcon, Popup } from '@fluentui/react-northstar';

export default function PopupItem(props) {
  const [alertFlag, setAlert] = React.useState(false);
  return (
    <Box>
      <Popup
        trigger={
          <Button
            icon={<MoreIcon />}
            content="Context + Hover"
            aria-label="Right click or hover button"
            onClick={ () => { 
              setAlert(true)
              setTimeout(
                () => setAlert(false),
                4000,
              )}
            }
          />
        }
        content="Hello from popup on hover!"
        on={['context', 'hover']}
        position="below"
      />
      {alertFlag && <Alert warning content="Click!" />}
    </Box>
  )
}