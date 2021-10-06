import React from "react";
import { Box, Flex, Image, Text, SplitButton } from "@fluentui/react-northstar";
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";
import { ComponentPrototype } from "../util/PageUtil.jsx";

class Project extends React.Component {
  render() {
    const menu = [
      {
        key: 'Create New Project',
        content: '1. Create New Project',
      },
      {
        key: 'Provision in the Cloud',
        content: '2. Provision in the Cloud',
      },
      {
        key: 'Deploy to the Cloud',
        content: '3. Deploy to the Cloud',
      },
      {
        key: 'Local Debug',
        content: '4. Local Debug',
      },
      {
        key: 'Add Capabilities',
        content: '5. Add Capabilities',
      },
    ]
    return (
      <Box className="Project page">
        <Flex gap="gap.small">
          <Box class="HeaderBox">
            <Box class="HeaderContent">
              <SplitButton
                menu={ menu }
                button={{
                  content: 'Project',
                  'aria-roledescription': 'splitbutton',
                  'aria-describedby': 'instruction-message-primary-button',
                }}
                primary
                size="largest"
                toggleButton={{
                  'aria-label': 'more options',
                }}
                onMenuItemClick= { (e, { index }) => ScrollToAnchor(menu[index].key) }
              />
            </Box>
          </Box>
          <Box class="ContentBox">
            <ComponentPrototype 
              title="Project"
              description="Create your first Project by Teams Toolkit!"
            >
              <Flex column>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='1. Create New Project:' 
                    id="Create New Project"
                  />
                  </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/create_new_project.gif" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='2. Provision in the Cloud:' 
                    id="Provision in the Cloud"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/provision_in_the_cloud.gif" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='3. Deploy to the Cloud:' 
                    id="Deploy to the Cloud"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/deploy_to_the_cloud.gif" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='4. Local Debug:' 
                    id="Local Debug"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Text>Or just press <code>F5</code></Text>
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/local_dubug.gif" />
                </Flex>
                <Flex class="StepContent">
                  <Text>Local Dubug Page</Text>
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/local_dubug_web_page.gif" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='5. Add Capabilities:' 
                    id="Add Capabilities"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/add_capabilities.gif" />
                </Flex>
              </Flex>
            </ComponentPrototype>
            <TopJumper />
          </Box>
        </Flex>
      </Box>
    )
  }
}

export default Project;