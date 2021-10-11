import React from "react";
import { 
  Alert,
  Box, 
  Button, 
  ExpandIcon,
  Flex,
  MenuButton } from '@fluentui/react-northstar'

export default function MenuButtonItem(props) {
  const [alertFlag, setAlert] = React.useState(false);
  const showAlert = () => {
    setAlert(true) || setTimeout(() => { setAlert(false) }, 2000)
  }
  const menuItem = [
    '1',
    '2',
    '3',
    {
      content: 'submenu',
      menu: {
        items: ['4', '5'],
      },
    },
  ]
  return (
    <Box>
      <>
        <Flex gap="gap.smaller">
          <MenuButton
            trigger={<Button icon={<ExpandIcon />} content="Click" aria-label="Click button" />}
            menu={ menuItem }
            on="click"
          />
          <MenuButton
            trigger={<Button icon={<ExpandIcon />} content="Hover" aria-label="Hover button" />}
            menu={ menuItem }
            on="hover"
          />
          <MenuButton
            trigger={<Button icon={<ExpandIcon />} content="Focus" aria-label="Focus button" />}
            menu={ menuItem }
            on="focus"
          />
          <MenuButton
            trigger={
              <Button
                icon={<ExpandIcon />}
                content="Context"
                aria-label="Context button"
                onClick={ showAlert }
              />
            }
            menu={ menuItem }
            on="context"
          />
        </Flex>
        {alertFlag && (
          <Alert
            warning
            content="Right, you can still click the button! Right click opens the MenuButton."
          />
        )}
      </>
    </Box>
  )
}