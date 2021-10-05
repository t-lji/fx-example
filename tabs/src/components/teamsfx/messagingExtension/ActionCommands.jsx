import { Flex, Image, Label, Text } from '@fluentui/react-northstar';
import ActionCommandsJson from '../../../assets/code/messageExtension/actionCommands/actionCommandsJson.json';
import ActionCommandsBotCode from '!!raw-loader!../../../assets/code/messageExtension/actionCommands/actionCommandsBotCode.js';
import Code from "../../util/CodeUtil";
import { Collapse, ComponentPrototype } from "../../util/PageUtil";

export default function ActionCommands(props) {
  return (
    <ComponentPrototype 
      id="ActionCommands"
      title="Action Commands"
      description="Action commands allow you to present your users with a modal 
      popup called a task module in Teams. The task module collects or displays
      information, processes the interaction and sends the information back to Teams."
    >
      <Flex column>
        <Flex>
          <Text weight="regular" size="large"  
            content='1. Select action command invoke locations:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Label
            content="commandBox: By @mentioning your app in the command box."
          />
          <Flex class="StepContent">
            <Image src="pic/search_command_box.png" />
          </Flex>
          <Label
            content="message: Directly from an existing message through the ... 
            overflow menu on a message."
          />
          <Flex class="StepContent">
            <Image src="pic/share_message_option.png" />
          </Flex>
          <Label
            content="compose: The buttons at the bottom of the compose message area."
          />
          <Flex class="StepContent">
            <Image src="pic/create_card_action.png" />
          </Flex>
        </Flex>
        <Flex>
          <Text weight="regular" size="large"  
            content='2. Add the action command to your app manifest:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ ActionCommandsJson } language='json' /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large"  
            content='3. Modify the "teamsBot.js" to register your message extension:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ ActionCommandsBotCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large"  
            content='4. Save your code and Restart your application or Deploy your 
            application to Azure again.' 
          />
        </Flex>
        <Flex>
          <Text weight="regular" size="large"  
            content='5. You can create an adaptive card:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/create_card_card.png" />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/create_card_result.png" />
        </Flex>
        <Flex>
          <Text weight="regular" size="large"  
            content='6. You can share your message with others:' 
          />
          </Flex>
        <Flex class="StepContent">
          <Image src="pic/share_message_action.png" />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/share_message_result.png" />
        </Flex>
      </Flex>
    </ComponentPrototype>
  )
}