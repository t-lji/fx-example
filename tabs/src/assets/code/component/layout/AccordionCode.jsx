import React from "react";
import { 
  Accordion, 
  Button, 
  ErrorIcon, 
  Flex,
  Layout,  
  Label } from '@fluentui/react-northstar'

export default function AccordionItem(props) {
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
  return <Accordion defaultActiveIndex={[0]} panels={panels} />
}