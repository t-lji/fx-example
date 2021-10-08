import { Flex, Image, Label, Text } from '@fluentui/react-northstar';
import searchCommandsJson from '../../../assets/code/messageExtension/searchCommands/searchCommandsJson.json';
import searchCommandsCode from '!!raw-loader!../../../assets/code/messageExtension/searchCommands/searchCommandsCode.js';
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";

export default function SearchCommands() {
  return(
    <ComponentPrototype 
      title="Search Commands"
      description="Messaging extension search commands allow users to search 
      external systems and insert the results of that search into a message in 
      the form of a card."
    >
      <Flex column>
        <Flex>
          <Text weight="regular" size="large" 
            content='1. Select search command invoke locations:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Label content="commandBox: By @mentioning your app in the command box."/>
          <Flex class="StepContent">
            <Image src="pic/search_command_box.png" />
          </Flex>
          <Label content="compose: The buttons at the bottom of the compose message area."/>
          <Flex class="StepContent">
            <Image src="pic/search_command_text.png" />
          </Flex>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='2. Add the search command to your app manifest:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ searchCommandsJson } language='json' /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large"> 
            3. Modify the <code>teamsBot.js</code> to register your message extension:
          </Text>
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ searchCommandsCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='4. Save your code and Restart your application or Deploy 
            your application to Azure again.' 
          />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='5. You can search for some npm packages:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/search_command_action.png" />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='6. You will get a description of the npm package:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/search_command_result.png" />
        </Flex>
      </Flex>
    </ComponentPrototype> 
  )
}