import { Button, Flex, Header, Image, Segment, Text } from '@fluentui/react-northstar';
import searchCommandsJson from '../../../assets/code/messageExtension/searchCommands/searchCommandsJson.json';
import searchCommandsCode from '!!raw-loader!../../../assets/code/messageExtension/searchCommands/searchCommandsCode.js';
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";

export default function SearchCommands() {
  return (
    <div id="SearchCommands page">
      <Header as="h4" content="Search Commands" />

      <Flex column>
        <Segment inverted>
          <Text weight="regular">Messaging extension search commands allow users to search 
          external systems and insert the results of that search into a message in the form
          of a card. 
          </Text>
        </Segment>
        <Segment inverted>
          <Text content='1. Select search command invoke locations:' />
          <ui>
            <li>commandBox: By @mentioning your app in the command box.</li>
            <Image src="pic/search_command_box.png" />
            <li>compose: The buttons at the bottom of the compose message area.</li>
            <Image src="pic/search_command_text.png" />
          </ui>
        </Segment>
        <Segment inverted>
          <Text content='2. Add the search command to your app manifest:' />
          <Collapse>
            <Code code={ searchCommandsJson } language='json' />
          </Collapse>
        </Segment>
        <Segment inverted>
          <Text content='3. Modify the "teamsBot.js" to register your message extension:' />
          <Collapse>
            <Code code={ searchCommandsCode } />
          </Collapse>
        </Segment>
        <Segment inverted>
          <Text content='4. Save your code and Restart your application or Deploy your application to Azure again.' />
        </Segment>
        <Segment inverted>
          <Text content='5. You can search for some npm package:' />
        </Segment>
        <Segment inverted>
          <Image src="pic/search_command_action.png" />
        </Segment>
        <Segment inverted>
          <Text content='6. You will get a description of the npm package:' />
        </Segment>
        <Segment inverted>
          <Image src="pic/search_command_result.png" />
        </Segment>
      </Flex>
    </div>
  )
}