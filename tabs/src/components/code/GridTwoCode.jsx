import { Grid, Segment } from '@fluentui/react-northstar'

<Grid columns="repeat(2, 1fr)">
  <Segment
    color="brand"
    content="Header"
    inverted
    styles={{
      gridColumn: '1/3',
      gridRow: 1,
    }}
  />
  <Segment
    color="red"
    content="Menu"
    inverted
    styles={{
      gridColumn: '3',
      gridRow: '1/3',
    }}
  />
  <Segment
    color="green"
    content="Notes"
    inverted
    styles={{
      gridColumn: '1',
      gridRow: '2',
    }}
  />
  <Segment
    color="grey"
    content="News"
    inverted
    styles={{
      gridColumn: '2',
      gridRow: '2',
    }}
  />
</Grid>