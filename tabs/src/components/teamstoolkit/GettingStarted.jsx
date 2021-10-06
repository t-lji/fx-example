import React from "react";
import { Box, Button, Flex, Image, Text, SplitButton } from "@fluentui/react-northstar";
import CreateTableSQL from '!!raw-loader!../../assets/code/teamsToolkit/gettingStarted/createTableSQL.sql'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";
import Code from "../util/CodeUtil"
import { ComponentPrototype } from "../util/PageUtil.jsx";

export default class GettingStarted extends React.Component {
  render() {
    const menu = [
      {
        key: 'Download Sample',
        content: '1. Download Sample',
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
        key: 'Find your database',
        content: '4. Find your database',
      },
      {
        key: 'Log in your database',
        content: '5. Log in your database',
      },
      {
        key: 'Create database in Azure',
        content: '6. Create database in Azure',
      },
      {
        key: 'Run your app',
        content: '7. Run your app',
      },
      {
        key: 'Select scope of your app',
        content: '8. Select scope of your app',
      },
      {
        key: 'Set up your app for your selected scope',
        content: '9. Set up your app for your selected scope',
      },
      {
        key: 'Confirm your tab configuration for your selected scope',
        content: '10. Confirm your tab configuration for your selected scope',
      },
      {
        key: 'Enter the app for the first time',
        content: '11. Enter the app for the first time',
      },
      {
        key: 'Accept permission for use your profile',
        content: '12. Accept permission for use your profile',
      },
      {
        key: 'Enjoy your first app in Teams',
        content: '13. Enjoy your first app in Teams',
      },
    ]
    return (
      <Box className="Getting Started page">
        <Flex gap="gap.small">
          <Box class="HeaderBox">
            <Box class="HeaderContent">
              <SplitButton
                menu={ menu }
                button={{
                  content: 'Getting Started',
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
              title="Getting Started"
              description="Get Started with your first Teams App!"
            >
              <Flex column>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='1. Download Sample:' 
                    id="Download Sample"
                  />
                  </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/getting_start_download_sample.gif" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='2. Provision in the Cloud:' 
                    id="Provision in the Cloud"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/getting_start_provision.gif" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='3. Deploy to the Cloud:' 
                    id="Deploy to the Cloud"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/getting_start_deploy.gif" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='4. Find your database:' 
                    id="Find your database"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Text>Open <strong>.fx/env.default.json</strong> file, you could 
                    get the database name in <strong>databaseName</strong> setting
                  </Text>
                </Flex>
                <Flex class="StepContent">
                  <Text>In  
                    <Button 
                      onClick={ event => { window.open("https://ms.portal.azure.com/", "_blank"); } }
                      content="Azure portal"
                    />
                    , find the database and use query editor
                  </Text>
                </Flex>
                <Flex class="StepContent">
                  <Image src="pic/getting_start_all_resources.png" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='5. Log in your database:' 
                    id="Log in your database"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Text>Use your Login and Password in 
                    <Button 
                      onClick={ event => { ScrollToAnchor("Provision in the Cloud") } }
                      content="step 2" 
                    />
                  </Text>
                </Flex>
                <Flex class="StepContent">
                  <Image src="pic/getting_start_all_resources_login.png" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='6. Create database in Azure:' 
                    id="Create database in Azure"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Text>With below query to create a table</Text>
                  <Code code={ CreateTableSQL }></Code>
                  <Image fluid src="pic/getting_start_all_resources_create_table.png" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='7. Run your app:' 
                    id="Run your app"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Text>Open Debug View (<code>Ctrl+Shift+D</code>), select 
                    <strong>Launch Remote (Edge)</strong>, then Click 
                    <strong> start</strong> or Press <code>F5</code>.
                  </Text>
                </Flex>
                <Flex class="StepContent">
                  <Image src="pic/getting_start_run.png" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='8. Select scope of your app:' 
                    id="Select scope of your app"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/getting_start_select_scope.png" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='9. Set up your app for your selected scope:' 
                    id="Set up your app for your selected scope"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/getting_start_set_up.png" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='10. Confirm your tab configuration for your selected scope:'
                    id="Confirm your tab configuration for your selected scope" 
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image src="pic/getting_start_tab_configuration.png" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='11. Enter the app for the first time:' 
                    id="Enter the app for the first time"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/getting_start_start_page.png" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='12. Accept permission for use your profile:' 
                    id="Accept permission for use your profile"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image src="pic/getting_start_permission_page.png" />
                </Flex>
                <Flex>
                  <Text weight="regular" size="large" 
                    content='13. Enjoy your first app in Teams:' 
                    id="Enjoy your first app in Teams"
                  />
                </Flex>
                <Flex class="StepContent">
                  <Image fluid src="pic/getting_start_result.gif" />
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
