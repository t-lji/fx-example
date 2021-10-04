import React from "react";
import _ from 'lodash'
import { 
  AcceptIcon,
  BanIcon,
  Box, 
  Button, 
  CallPstnIcon,
  Divider, 
  Flex,
  Header, 
  Input, 
  Loader,
  MicIcon,
  MicOffIcon,
  OneDriveIcon,
  QuestionCircleIcon,
  Slider,
  Status,
  Text, 
  ProviderConsumer, } from '@fluentui/react-northstar'
import DividerCode from '!!raw-loader!../../../assets/code/component/other/DividerCode.jsx'
import LoaderCode from '!!raw-loader!../../../assets/code/component/other/LoaderCode.jsx'
import SliderCode from '!!raw-loader!../../../assets/code/component/other/SliderCode.jsx'
import StatusCode from '!!raw-loader!../../../assets/code/component/other/StatusCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function DividerItem() {
  return (
    <Box>
      <Header as="h4" content="Divider" />

      <Text weight="regular" size="large">
        A Divider visually segments content.
      </Text>
      <Collapse>
        <Code code={ DividerCode } />
      </Collapse>
      <ProviderConsumer
        render={({ siteVariables: { contextualColors, naturalColors } }) =>
          _.map({ ...contextualColors, ...naturalColors }, (variants, name) => (
            <Divider key={name} color={name} size={3} content={_.startCase(name)} />
          ))
        }
      />
    </Box>
  )
}

function LoaderItem() {
  return (
    <Box>
      <Header as="h4" content="Loader" />

      <Text weight="regular" size="large">
        A loader alerts a user that content is being loaded or processed and 
        they should wait for the activity to complete.
      </Text>
      <Collapse>
        <Code code={ LoaderCode } />
      </Collapse>
      <Loader size="large" label="At start / Large" labelPosition="start" />
    </Box>
  )
}

function SliderItem() {
  const stateReducer = (state, action) => {
    switch (action.type) {
      case 'toggle_mute':
        const mute = !state.mute
        const value = mute ? state.minValue : state.currentValue
        if (!mute && value <= state.minValue) return { ...state }
        return { ...state, mute, value, currentValue: state.value }
  
      case 'change_value':
        return { ...state, mute: action.value <= state.minValue, value: action.value }
  
      default:
        throw new Error(`Action ${action.type} is not supported`)
    }
  }
  const [vertical, setVertical] = React.useState(false)
  const { min, max } = {
    min: 0,
    max: 100,
  }
  const [state, dispatch] = React.useReducer(stateReducer, {
    mute: false,
    value: min + (max - min) / 2,
    currentValue: min,
    minValue: min,
  })
  const handleChange = React.useCallback(
    (e, data) =>
      dispatch({
        type: 'change_value',
        value: data.value,
      }),
    [],
  )
  const commonProps = {
    min,
    max,
    value: state.value,
    onChange: handleChange,
  }
  return (
    <Box>
      <Header as="h4" content="Slider" />

      <Text weight="regular" size="large">
        A Slider represents an input that allows user to choose a value from within a specific range.
      </Text>
      <Collapse>
        <Code code={ SliderCode } />
      </Collapse>
      <Flex inline hAlign="center" vAlign="center" gap="gap.smaller" column={vertical}>
        <Button
          text
          iconOnly
          icon={state.mute ? <MicOffIcon /> : <MicIcon />}
          onClick={() =>
            dispatch({
              type: 'toggle_mute',
            })
          }
          title="Toggle mute"
        />
        <Slider {...commonProps} vertical={vertical} />
        <Input
          type="number"
          input={{
            styles: {
              width: '64px',
            },
          }}
          {...commonProps}
        />
        <Button onClick={ () => setVertical(!vertical) } content="Vertical/Horizonal" />
      </Flex>
    </Box>
  )
}

function StatusItem() {
  return (
    <Box>
      <Header as="h4" content="Status" />

      <Text weight="regular" size="large">
        A Status represents someone's or something's state.
      </Text>
      <Collapse>
        <Code code={ StatusCode } />
      </Collapse>
      <Flex column>
        <Flex>
          <Status state="success" title="success" icon={ <AcceptIcon /> } /> <code>state="success"</code>
        </Flex>
        <Flex>
          <Status state="info" title="info" icon={ <OneDriveIcon /> } /> <code>state="info"</code>
        </Flex>
        <Flex>
          <Status state="warning" title="warning" icon={ <CallPstnIcon /> } /> <code>state="warning"</code>
        </Flex>
        <Flex>
          <Status state="error" title="error" icon={ <BanIcon /> } /> <code>state="error"</code>
        </Flex>
        <Flex>
          <Status state="unknown" title="unknown" icon={ <QuestionCircleIcon /> } /> <code>state="unknown"</code>
        </Flex>
      </Flex>
    </Box>
  )
}

export default function Other() {
  return (
    <Box>
      <Header as="h3" content="Other" />
      <ul id="OtherList">
        <li><Button onClick={ () => ScrollToAnchor('DividerItem') }>Divider</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('LoaderItem') }>Loader</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('SliderItem') }>Slider</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('StatusItem') }>Status</Button></li>
      </ul>
      <Box id="DividerItem"><DividerItem /></Box>
      <Box id="LoaderItem"><LoaderItem /></Box>
      <Box id="SliderItem"><SliderItem /></Box>
      <Box id="StatusItem"><StatusItem /></Box>
    </Box>
  )
}
