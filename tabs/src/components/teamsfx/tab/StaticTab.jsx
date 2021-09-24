import { Flex, Header, Image, Segment, Text } from '@fluentui/react-northstar';
import PersonalTabCode from '!!raw-loader!../../../assets/code/tab/staticTab/PersonalTabCode.jsx'
import JsxLocation from '!!raw-loader!../../../assets/code/tab/staticTab/JsxLocation.txt'
import ManifestLocation from '!!raw-loader!../../../assets/code/tab/staticTab/ManifestLocation.txt'
import ManifestJson from '../../../assets/code/tab/staticTab/ManifestJson.json'
import PersonalTabRouteCode from '!!raw-loader!../../../assets/code/tab/staticTab/PersonalTabRouteCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";

export default function StaticTab() {
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
          <Code code={ JsxLocation } />
        </Segment>
        <Segment inverted>
          <Text content='3. Open "manifest.template.json" from the following location in your code editor:' />
          <Code code={ ManifestLocation } />
        </Segment>
        <Segment inverted>
          <Text content='4. Add the following to the empty staticTabs array (staticTabs":[]) and add the following JSON object:' />
          <Code code={ ManifestJson } language='json' />
        </Segment>
        <Segment inverted>
          <Text content='5. Save the updated "manifest.template.json" file.' />
        </Segment>
        <Segment inverted>
          <Text content='6. Add Route in your App.jsx:' />
          <Code code={ PersonalTabRouteCode } />
        </Segment>
        <Segment inverted>
          <Text content='7. Restart your application or deploy your application to Azure again.' />
        </Segment>
        <Segment inverted>
          <Text content='8. Access your tab by inputing url directly:' />
          </Segment>
        <Segment inverted>
          <Image src="pic/url_tab_example.png" />
        </Segment>
        <Segment inverted>
          <Text content='9. Access your tab by app menu:' />
          </Segment>
        <Segment inverted>
          <Image src="pic/tab_example.png" />
        </Segment>
      </Flex>
    </div>
  )
}