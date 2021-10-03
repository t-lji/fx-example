import _ from 'lodash'
import { Segment, ProviderConsumer } from '@fluentui/react-northstar'

<ProviderConsumer
  render={({ siteVariables: { contextualColors, naturalColors } }) =>
    _.keys({ ...contextualColors, ...naturalColors }).map(color => (
      <Segment key={color} color={color} content={_.startCase(color)} inverted />
    ))
  }
/>