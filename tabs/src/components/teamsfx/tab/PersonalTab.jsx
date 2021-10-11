import { Box, Header, Image, Text } from '@fluentui/react-northstar'

export default function PersonalTab() {
  return (
    <Box>
      <Header as="h1">Personal Tab</Header>
      <Text><Image src="Microsoft.png" alt="Microsoft logo"/></Text>
      <Text>This is your personal tab!</Text>
    </Box>
  )
}