import { 
  AddIcon,
  Box, 
  Button, 
  CloseIcon, 
  EmailIcon, 
  EmojiIcon, 
  Header, 
  Label, 
  Provider } from '@fluentui/react-icons-northstar'

<Box>
  {/* Default theming */}
  <Header as="h3" content="Default theming" />
  <Button content="Button" />
  <Button icon={<AddIcon />} iconOnly primary />
  <Button icon={<EmailIcon />} content="Send email" secondary />
  <EmojiIcon size="larger" />
  <Label content="Label with icon" icon={<CloseIcon />} />

  {/* First nested theming */}
  <Provider
    theme={{
      componentVariables: {
        Button: {
          primaryBackgroundColor: 'darkred',
        },
      },
    }}
  >
    <Box>
      <Header as="h3" content="First nested theming" />

      <Button content="Button" />
      <Button icon={<AddIcon />} iconOnly primary />
      <Button icon={<EmailIcon />} content="Send email" secondary />
      <EmojiIcon size="larger" />
      <Label content="Label with icon" icon={<CloseIcon />} />

      {/* Second nested theming */}
      <Provider
        theme={{
          componentStyles: {
            Button: {
              root: { color: 'goldenrod' },
            },
          },
        }}
      >
        <Box>
          <Header as="h3" content="Second nested theming" />

          <Button content="Button" />
          <Button icon={<AddIcon />} iconOnly primary />
          <Button icon={<EmailIcon />} content="Send email" secondary />
          <EmojiIcon size="larger" />
          <Label content="Label with icon" icon={<CloseIcon />} />
        </Box>
      </Provider>
    </Box>
  </Provider>
</Box>
