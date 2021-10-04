import { Button, Dialog, Flex, Text } from '@fluentui/react-northstar'

<Dialog
  cancelButton="Cancel"
  confirmButton="Confirm"
  content="This is content"
  header="This is header"
  footer={{
    children: (Component, props) => {
      const { styles, ...rest } = props
      return (
        <Flex styles={styles}>
          <Text content="This is footer" color="brand" />
          <Flex.Item push>
            <Component {...rest} />
          </Flex.Item>
        </Flex>
      )
    },
  }}
  trigger={<Button content="Open a dialog" />}
/>