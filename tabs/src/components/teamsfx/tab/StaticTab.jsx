import { Flex, Header, Image, Segment, Text } from '@fluentui/react-northstar';
import PersonalTabCode from '!!raw-loader!../../code/tab/PersonalTabCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";

export default function StaticTab() {
  const jsxLocation = './src/<YourPath>/PersonalTab.jsx';
  const manifestLocation = './src/manifest/manifest.json/';
  const manifestJson = '{\n    "entityId": "tab example",\n    "name": "tab example",\n    "contentUrl": "{baseUrl}/index.html#/personaltab",\n    "websiteUrl": "{baseUrl}/index.html#/personaltab"\n,    "scopes": ["personal"]\n}'
  const personalTabRoute = 'import PersonalTab from "./<YourPath>/PersonalTab";\n<Route exact path="/personaltab" component={ PersonalTab } />'

  return (
    <div>
      <Header as="h3" content="Static Tab" />
      <Header as="h4" content="Add a personal tab" />
      <Flex column>
        <Segment inverted>
          <Text weight="regular" size="large" content='To add a personal tab to this application, create a content page, and update existing files' />
        </Segment>
        <Segment inverted>
          <Text content='1. In your vs-code editor, create a new jsx/tsx file PersonalTab.jsx/tsx:' />
          <Collapse>
            <Code code={ PersonalTabCode } />
          </Collapse>
        </Segment>
        <Segment inverted>
          <Text content="2. Save PersonalTab.jsx in your application's web folder anywhere you want:" />
          <Code code={ jsxLocation } />
        </Segment>
        <Segment inverted>
          <Text content="3. Open manifest.json from the following location in your code editor:" />
          <Code code={ manifestLocation } />
        </Segment>
        <Segment inverted>
          <Text content='4. Add the following to the empty staticTabs array (staticTabs":[]) and add the following JSON object:' />
          <Code code={ manifestJson } />
        </Segment>
        <Segment inverted>
          <Text content='5. Save the updated manifest.json file.' />
        </Segment>
        <Segment inverted>
          <Text content='6. Add Route in your App.jsx:' />
          <Code code={ personalTabRoute } />
        </Segment>
        <Segment inverted>
          <Text content='7. Restart your application or deploy your application to Azure again.' />
        </Segment>
        <Segment inverted>
          <Text content='8. Access your tab by enter url directly:' />
          </Segment>
        <Segment inverted>
          <Image src="url_tab_example.png" />
        </Segment>
        <Segment inverted>
          <Text content='9. Access your tab by app menu:' />
          </Segment>
        <Segment inverted>
          <Image src="tab_example.png" />
        </Segment>
      </Flex>
    </div>
  )
}