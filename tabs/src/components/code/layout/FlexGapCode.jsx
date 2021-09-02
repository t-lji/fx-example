import { Flex, Segment, FlexItem } from '@fluentui/react-northstar'

<Flex gap="gap.small">
  <Segment color="brand" content="Home" inverted />
  <Segment color="green" content="Search" inverted />
  <FlexItem push>
    <Segment color="red" content="Logout" inverted />
  </FlexItem>
</Flex>