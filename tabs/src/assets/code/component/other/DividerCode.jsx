import _ from 'lodash'
import { Divider, ProviderConsumer } from '@fluentui/react-northstar'

<ProviderConsumer
  render={({ siteVariables: { contextualColors, naturalColors } }) =>
    _.map({ ...contextualColors, ...naturalColors }, (variants, name) => (
      <Divider key={name} color={name} size={3} content={_.startCase(name)} />
    ))
  }
/>