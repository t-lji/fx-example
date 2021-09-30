import { Flex, Header, Image, Segment, Text } from '@fluentui/react-northstar';
import ActionCommandsJson from '../../../assets/code/messageExtension/actionCommands/actionCommandsJson.json';
import ActionCommandsBotCode from '!!raw-loader!../../../assets/code/messageExtension/actionCommands/actionCommandsBotCode.js';
import Code from "../../util/CodeUtil";
import { Collapse } from "../../util/PageUtil";

export default function ActionCommands() {
  return (
    <div id="ActionCommands page">
      <Header as="h4" content="Action Commands" />

      <Flex column>
        <Segment inverted>
          <Text weight="regular">Action commands allow you to present your users with a
            modal popup called a task module in Teams. The task module collects or displays
            information, processes the interaction and sends the information back to Teams.
            This document guides you on how to select action command invoke locations, create your task module, send final message, or card, create action command using app studio, or create it manually.
          </Text>
        </Segment>
        <Segment inverted>
          <Text content='1. Select action command invoke locations: ' />
          <ui>
            <li>commandBox: By @mentioning your app in the command box.</li>
            <Image src="pic/search_command_box.png" />
            <li>message: Directly from an existing message through the <code>...</code> overflow menu on a message.</li>
            <Image src="pic/share_message_option.png" />
            <li>compose: The buttons at the bottom of the compose message area.</li>
            <Image src="pic/create_card_action.png" />
          </ui>
        </Segment>
        <Segment inverted>
          <Text content='2. Add the action command to your app manifest:' />
          <Collapse>
            <Code code={ ActionCommandsJson } language='json' />
          </Collapse>
        </Segment>
        <Segment inverted>
          <Text content='3. Modify the "teamsBot.js" to register your message extension:' />
          <Collapse>
            <Code code={ ActionCommandsBotCode } />
          </Collapse>
        </Segment>
        <Segment inverted>
          <Text content='4. Save your code and Restart your application or Deploy your application to Azure again.' />
        </Segment>
        <Segment inverted>
          <Text content='5. You can create an adaptive card:' />
        </Segment>
        <Segment inverted>
          <Image src="pic/create_card_card.png" />
        </Segment>
        <Segment inverted>
          <Image src="pic/create_card_result.png" />
        </Segment>
        <Segment inverted>
          <Text content='6. You can share your message with others:' />
        </Segment>
        <Segment inverted>
          <Image src="pic/share_message_action.png" />
        </Segment>
        <Segment inverted>
          <Image src="pic/share_message_result.png" />
        </Segment>
      </Flex>
    </div>
  )
}