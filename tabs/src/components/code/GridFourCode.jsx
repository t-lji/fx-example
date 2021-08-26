import { Grid, Segment } from '@fluentui/react-northstar'

<Grid columns="repeat(4, 1fr)" rows="50px 150px 50px">
  <Segment
    color="brand"
    content="Header"
    inverted
    styles={{
      gridColumn: 'span 4',
    }}
  />
  <Segment
    color="green"
    content="Menu"
    inverted
    styles={{
      gridColumn: 'span 1',
    }}
  />
  <Segment
    content="Content"
    styles={{
      gridColumn: 'span 3',
    }}
  />
  <Segment
    color="brand"
    content="Footer"
    inverted
    styles={{
      gridColumn: 'span 4',
    }}
  />
</Grid>