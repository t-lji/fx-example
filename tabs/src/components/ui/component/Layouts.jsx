import React, { useState } from "react";
import _ from 'lodash'
import { 
  Accordion, 
  BookmarkIcon,
  Box,
  Breadcrumb,
  Button, 
  CalendarIcon,
  Checkbox,
  ChevronEndMediumIcon,
  Divider,
  Dropdown,
  ErrorIcon, 
  Flex, 
  Form,
  FormInput,
  FormDropdown,
  FormRadioGroup,
  FormSlider,
  FormCheckbox,
  FormDatepicker,
  FormButton,
  FormTextArea,
  Header,
  Image, 
  Input,
  Layout,  
  Label,  
  List,
  Menu,
  ProviderConsumer,
  RadioGroup,
  SearchIcon,
  Segment,
  Text,
  Tree,
  treeAsListboxBehavior,
  WordIcon, } from '@fluentui/react-northstar'
import AccordionCode from '!!raw-loader!../../../assets/code/component/layout/AccordionCode.jsx'
import BreadcrumbCode from '!!raw-loader!../../../assets/code/component/layout/BreadcrumbCode.jsx'
import CheckboxCode from '!!raw-loader!../../../assets/code/component/layout/CheckboxCode.jsx'
import BoxCode from '!!raw-loader!../../../assets/code/component/layout/BoxCode.jsx'
import DropdownCode from '!!raw-loader!../../../assets/code/component/layout/DropdownCode.jsx'
import FormCode from '!!raw-loader!../../../assets/code/component/layout/FormCode.jsx'
import InputCode from '!!raw-loader!../../../assets/code/component/layout/InputCode.jsx'
import ListCode from '!!raw-loader!../../../assets/code/component/layout/ListCode.jsx'
import MenuCode from '!!raw-loader!../../../assets/code/component/layout/MenuCode.jsx'
import RadioGroupCode from '!!raw-loader!../../../assets/code/component/layout/RadioGroupCode.jsx'
import SegmentCode from '!!raw-loader!../../../assets/code/component/layout/SegmentCode.jsx'
import TreeCode from '!!raw-loader!../../../assets/code/component/layout/TreeCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function AccordionItem() {
  const panels = [
    {
      key: 'default',
      title: 'What is a point?',
      content: 'Use the haptic SDD circuit, then you can index the redundant pixel!',
    },
    {
      key: 'dimension',
      title: 'What is a dimension of a point?',
      content: 'We need to copy the primary USB firewall!',
    },
    {
      title: (
        <Layout
          key="title"
          start={<Label icon={<ErrorIcon />} iconPosition="start" circular content="Warnings" />}
        />
      ),
      content: {
        key: 'warnings',
        content: 'Here is a list of warnings discovered.',
      },
    },
    {
      title: 'Pets',
      content: (
        <Flex gap="gap.smaller" key="animals">
          <Button primary>Add pet</Button>
          <Button>Remove pet</Button>
        </Flex>
      ),
    },
  ]
  return (
    <div>
      <Header as="h4" content="Accordion" />

      <Text weight="regular" size="large">
        An Accordion represents stacked set of content sections, with action 
        elements to toggle the display of these sections.
      </Text>
      <Collapse>
        <Code code={ AccordionCode } />
      </Collapse>
      <Accordion defaultActiveIndex={[0]} panels={panels} />
    </div>
  )
}

function BoxItem() {
  return (
    <div>
      <Header as="h4" content="Box" />

      <Text weight="regular" size="large">
        A Box is a basic component, commonly used for slots in other Fluent UI 
        components. By default it just renders a 'div'.
      </Text>
      <Collapse>
        <Code code={ BoxCode } />
      </Collapse>
      <Box
        content="Box"
        styles={{
          border: '1px dashed #ccc',
          color: 'blue',
          textAlign: 'center',
          width: '50px',
          ':hover': {
            color: 'red',
          },
        }}
      />
    </div>
  )
}

function BreadcrumbItem() {
  return (
    <div>
      <Header as="h4" content="Breadcrumb" />

      <Text weight="regular" size="large">
        Breadcrumb is a a component that indicates the path of the current page.
      </Text>
      <Collapse>
        <Code code={ BreadcrumbCode } />
      </Collapse>
      <Breadcrumb aria-label="breadcrumb" size="large">
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#/toolkit">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Divider>
          <ChevronEndMediumIcon size="large" />
        </Breadcrumb.Divider>
        <Breadcrumb.Item disabled>Store</Breadcrumb.Item>
        <Breadcrumb.Divider>
          <ChevronEndMediumIcon size="large" />
        </Breadcrumb.Divider>
        <Breadcrumb.Item aria-current="page">T-shirt</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

function CheckboxItem() {
  return (
    <div>
      <Header as="h4" content="Checkbox" />

      <Text weight="regular" size="large">
        A Checkbox allows a user to make a choice between two mutually exclusive options.
      </Text>
      <Collapse>
        <Code code={ CheckboxCode } />
      </Collapse>
      <>
        <Checkbox label="Checkbox toggle" toggle />
        <Checkbox disabled checked label="Checked" labelPosition="start" />
      </>
    </div>
  )
}

function DropdownItem() {
  const inputItems = [
    'Robert Tolbert',
    'Wanda Howard',
    'Tim Deboer',
    'Amanda Brady',
    'Ashley McCarthy',
    'Cameron Evans',
    'Carlos Slattery',
    'Carole Poland',
    'Robin Counts',
  ]
  return (
    <div>
      <Header as="h4" content="Dropdown" />

      <Text weight="regular" size="large">
        A Dropdown allows user to select one or more values from a list of options. 
        Can be created with search and multi-selection capabilities.
      </Text>
      <Collapse>
        <Code code={ DropdownCode } />
      </Collapse>
      <Dropdown
        search
        multiple
        items={inputItems}
        placeholder="Start typing a name"
        getA11ySelectionMessage={{
          onAdd: item => `${item} selected. Press left or right arrow keys to navigate selected items.`,
          onRemove: item => `${item} has been removed.`,
        }}
        noResultsMessage="We couldn't find any matches."
        a11ySelectedItemsMessage="Press Delete or Backspace to remove"
      />
    </div>
  )
}

function FormItem() {
  const items = [
    {
      name: 'pizza',
      key: 'Capricciosa',
      label: 'Capricciosa',
      value: 'capricciosa',
    },
    {
      name: 'pizza',
      key: 'Prosciutto',
      label: 'Prosciutto',
      value: 'prosciutto',
      disabled: true,
    },
    {
      name: 'pizza',
      key: 'Pepperoni',
      label: 'Pepperoni',
      value: 'pepperoni',
    },
  ]
  return (
    <div>
      <Header as="h4" content="Form" />

      <Text weight="regular" size="large">
        A Form is used to collect, oprionally validate, and submit the user input, 
        in a structured way.
      </Text>
      <Collapse>
        <Code code={ FormCode } />
      </Collapse>
      <Flex>
        <Form>
          <FormInput label="First name" name="firstName" required />
          <FormTextArea label="Bio" name="bio" />
          <FormDropdown label="City" items={['prague', 'new york']} />
          <FormRadioGroup label="Pizza" vertical defaultCheckedValue="prosciutto" items={items} />
          <FormSlider label="Bid the price" />
          <FormCheckbox label="I agree to the Terms and Conditions" />
          <FormDatepicker label="Select a date" />
          <FormButton content="Submit" />
        </Form>
      </Flex>
    </div>
  )
}

function InputItem() {
  return (
    <div>
      <Header as="h4" content="Input" />

      <Text weight="regular" size="large">
        An Input is a field used to elicit an input from a user.
      </Text>
      <Collapse>
        <Code code={ InputCode } />
      </Collapse>
      <div>
        Some text inline with the{' '}
        <Input 
          inline 
          icon={<SearchIcon />} 
          clearable 
          placeholder="input name" 
          input={{
            styles: {
              background: 'yellow',
            },
          }}
          wrapper={{
            // will override component's 'tabIndex' attribute
            tabIndex: 0,
            // will set custom styles for wrapper element
            styles: {
              padding: '1px',
              backgroundColor: 'red',
            },
          }} /> and more text.
      </div>
    </div>
  )
}

function ListItem() {
  const [selectedListIndex, setSelectedListItem] = useState(-1);
  const items = [
    {
      key: 'robert',
      media: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
          avatar
        />
      ),
      header: 'Robert Tolbert',
      headerMedia: '7:26:56 AM',
      content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    },
    {
      key: 'celeste',
      media: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CelesteBurton.jpg"
          avatar
        />
      ),
      header: 'Celeste Burton',
      headerMedia: '11:30:17 PM',
      content: 'Use the online FTP application to input the multi-byte application!',
    },
    {
      key: 'cecil',
      media: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
          avatar
        />
      ),
      header: 'Cecil Folk',
      headerMedia: '5:22:40 PM',
      content: 'The GB pixel is down, navigate the virtual interface!',
    },
  ]
  return (
    <div>
      <Header as="h4" content="List" />

      <Text weight="regular" size="large">
        A List displays a group of related sequential items.
      </Text>
      <Collapse>
        <Code code={ ListCode } />
      </Collapse>
      <List
        selectable
        selectedIndex={ selectedListIndex }
        onSelectedIndexChange={(e, newProps) => {
          alert(
            `List is requested to change its selectedIndex state to "${newProps.selectedIndex}"`,
          )
          setSelectedListItem(newProps.selectedIndex)
        }}
        items={items}
      />
    </div>
  )
}

function MenuItem() {
  const items = [
    {
      icon: (
        <BookmarkIcon
          {...{
            outline: true,
          }}
        />
      ),
      key: 'editorials',
      content: 'Editorials',
    },
    {
      icon: <WordIcon {...{}} />,
      key: 'review',
      content: 'Reviews',
    },
    {
      key: 'events',
      content: 'Upcoming Events',
    },
    {
      icon: <CalendarIcon {...{}} />,
      key: 'moreevents',
      content: 'View full calendar with content so long that it wraps',
      menu: {
        items: [
          {
            key: '1',
            content: 'item1',
          },
          {
            key: '2',
            content: 'item2',
          },
          {
            key: '3',
            content: 'item3',
          },
        ],
      },
    },
  ]
  return (
    <div>
      <Header as="h4" content="Menu" />

      <Text weight="regular" size="large">
        A Menu is a component that offers a grouped list of choices to the user.
      </Text>
      <Collapse>
        <Code code={ MenuCode } />
      </Collapse>
      <Menu defaultActiveIndex={0} items={items} vertical />
    </div>
  )
}

function RadioGroupItem() {
  const [selectedValue, setselectedValue] = useState('pink');
  return (
    <div>
      <Header as="h4" content="RadioGroup" />

      <Text weight="regular" size="large">
        A RadioGroup allows user to select a value from a small set of mutually 
        exclusive options.
      </Text>
      <Collapse>
        <Code code={ RadioGroupCode } />
      </Collapse>
      <Box>
        The selected value is: {selectedValue}
        <Divider />
        <RadioGroup
          defaultCheckedValue="pink"
          items={['pink', 'blue', 'green', 'red', 'orange'].map(color => ({
            key: color,
            value: color,
            name: color,
            'aria-label': color,
            variables: {
              indicatorColorDefault: color,
              indicatorBackgroundColorChecked: color,
              indicatorBorderColorDefaultHover: color,
            },
          }))}
          onCheckedValueChange={(e, props) => setselectedValue(props.value)
          }
        />
      </Box>
    </div>
  )
}

function SegmentItem() {
  return (
    <div>
      <Header as="h4" content="Segment" />

      <Text weight="regular" size="large">
        A Segment visually groups related content.
      </Text>
      <Collapse>
        <Code code={ SegmentCode } />
      </Collapse>
      <ProviderConsumer
        render={({ siteVariables: { contextualColors, naturalColors } }) =>
          _.keys({ ...contextualColors, ...naturalColors }).map(color => (
            <Segment key={color} color={color} content={_.startCase(color)} inverted />
          ))
        }
      />
    </div>
  )
}

function TreeItem() {
  const items = [
    {
      id: 'tree-as-list-item-1',
      title: 'House Lannister',
      'aria-label': 'House Lannister, expandable',
      items: [
        {
          id: 'tree-as-list-item-11',
          title: 'Tywin',
        },
        {
          id: 'tree-as-list-item-12',
          title: 'Kevan',
        },
      ],
    },
    {
      id: 'tree-as-list-item-2',
      title: 'House Targaryen',
      'aria-label': 'House Targaryen, expandable',
      items: [
        {
          id: 'tree-as-list-item-21',
          title: 'Aerys',
          'aria-label': 'Aerys, expandable',
          items: [
            {
              id: 'tree-as-list-item-211',
              title: 'Rhaegar',
            },
            {
              id: 'tree-as-list-item-212',
              title: 'Viserys',
            },
            {
              id: 'tree-as-list-item-213',
              title: 'Daenerys',
            },
          ],
        },
      ],
    },
  ]
  return (
    <div>
      <Header as="h4" content="Tree" />

      <Text weight="regular" size="large">
        A Tree displays data organised in tree hierarchy.
      </Text>
      <Collapse>
        <Code code={ TreeCode } />
      </Collapse>
      <Tree
        selectable
        aria-label="Multi Select Tree as list"
        items={items}
        accessibility={treeAsListboxBehavior}
      />
    </div>
  )
}

export default function Layouts() {
  return (
    <div>
      <Header as="h3" content="Layout" />
      <ul id="LayoutList">
        <li><Button onClick={ () => ScrollToAnchor('AccordionItem') }>Accordion</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('BoxItem') }>Box</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('BreadcrumbItem') }>Breadcrumb</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('CheckboxItem') }>Checkbox</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('DropdownItem') }>Dropdown</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('FormItem') }>Form</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('InputItem') }>Input</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('ListItem') }>List</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('MenuItem') }>Menu</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('RadioGroupItem') }>RadioGroup</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('SegmentItem') }>Segment</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('TreeItem') }>Tree</Button></li>
      </ul>
      <div id="AccordionItem"><AccordionItem /></div>
      <div id="BoxItem"><BoxItem /></div>
      <div id="BreadcrumbItem"><BreadcrumbItem /></div>
      <div id="CheckboxItem"><CheckboxItem /></div>
      <div id="DropdownItem"><DropdownItem /></div>
      <div id="FormItem"><FormItem /></div>
      <div id="InputItem"><InputItem /></div>
      <div id="ListItem"><ListItem /></div>
      <div id="MenuItem"><MenuItem /></div>
      <div id="RadioGroupItem"><RadioGroupItem /></div>
      <div id="SegmentItem"><SegmentItem /></div>
      <div id="TreeItem"><TreeItem /></div>
    </div>
  )
}
