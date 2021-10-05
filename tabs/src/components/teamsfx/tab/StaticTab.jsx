import { Flex, Image, Text } from '@fluentui/react-northstar';
import PersonalTabCode from '!!raw-loader!../../../assets/code/tab/staticTab/PersonalTabCode.jsx'
import JsxLocation from '!!raw-loader!../../../assets/code/tab/staticTab/JsxLocation.txt'
import ManifestLocation from '!!raw-loader!../../../assets/code/tab/staticTab/ManifestLocation.txt'
import ManifestJson from '../../../assets/code/tab/staticTab/ManifestJson.json'
import PersonalTabRouteCode from '!!raw-loader!../../../assets/code/tab/staticTab/PersonalTabRouteCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";

export default function StaticTab() {
  return (
    <ComponentPrototype 
      title="Static Tab - Add a personal tab"
      description="To add a personal tab to this application, create a content 
      page, and update existing files"
    >
      <Flex column>
        <Flex>
          <Text weight="regular" size="large" 
            content='1. In your vs-code editor, create a new jsx/tsx file 
            PersonalTab.jsx/tsx:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ PersonalTabCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content="2. Save PersonalTab.jsx in your application's web folder 
            anywhere you want:" 
          />
        </Flex>
        <Flex class="StepContent">
          <Code code={ JsxLocation } />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='3. Open "manifest.source.json" from the following location 
            in your code editor:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Code code={ ManifestLocation } />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='4. Add the following to the empty staticTabs array 
            (staticTabs":[]) and add the following JSON object:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ ManifestJson } language='json' /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='5. Save the updated "manifest.source.json" file.' 
          />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='6. Add Route in your App.jsx:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ PersonalTabRouteCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='7. Restart your application or deploy your application to 
            Azure again.' 
          />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='8. Access your tab by inputing url directly:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/url_tab_example.png" />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='9. Access your tab by app menu:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/tab_example.png" />
        </Flex>
      </Flex>
    </ComponentPrototype>
  )
}