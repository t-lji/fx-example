import { 
  Box, 
  ContactGroupIcon, 
  ChatIcon,
  ChannelShareIcon,
  SplitButton } from '@fluentui/react-northstar'

export default function SplitButtonItem() {
  return (
    <Box>
      <>
        <SplitButton
          menu={[
            {
              key: 'group',
              content: 'New group message',
              icon: <ContactGroupIcon />,
            },
            {
              key: 'channel',
              content: 'New channel message',
              icon: <ChannelShareIcon />,
            },
          ]}
          button={{
            content: 'New conversation',
            'aria-roledescription': 'splitbutton',
            'aria-describedby': 'instruction-message-primary-button',
            'icon': <ChatIcon />
          }}
          primary
          toggleButton={{
            'aria-label': 'more options',
          }}
          onMainButtonClick={() => alert('button was clicked')}
        />
        <span
          aria-hidden="true"
          id="instruction-message-primary-button"
          style={{
            opacity: 0,
          }}
        >
          to open menu, press Alt + Arrow Down
        </span>
      </>
    </Box>
  )
}