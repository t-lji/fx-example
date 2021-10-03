import { 
  Avatar, 
  Button, 
  Card, 
  DownloadIcon, 
  Flex, 
  Image, 
  MoreIcon, 
  StarIcon, 
  Text } from '@fluentui/react-northstar'

<Card aria-roledescription="card with avatar, image and action buttons">
  <Card.Header>
    <Flex gap="gap.small">
      <Avatar
        image="pic/Microsoft.png"
        label="Copy bandwidth"
        name="Robert Tolbert"
        status="unknown"
      />
      <Flex column>
        <Text content="Title goes here" weight="bold" />
        <Text content="Secondary line" size="small" />
      </Flex>
    </Flex>
  </Card.Header>
  <Card.Body>
    <Flex column gap="gap.small">
      <Image src="pic/Microsoft.png" />
      <Text content="Citizens of distant epochs muse about at the edge of forever hearts of the..." />
    </Flex>
  </Card.Body>
  <Card.Footer>
    <Flex space="between">
      <Button content="Action" />
      <Flex>
        <Button icon={<StarIcon />} iconOnly text title="Favourite" />
        <Button icon={<DownloadIcon />} iconOnly text title="Download" />
        <Button icon={<MoreIcon />} iconOnly text title="More" />
      </Flex>
    </Flex>
  </Card.Footer>
</Card>