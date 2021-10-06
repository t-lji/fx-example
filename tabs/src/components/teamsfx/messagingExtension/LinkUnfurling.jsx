import { Flex, Image, Text } from '@fluentui/react-northstar';
import LinkUnfurlingJson from '../../../assets/code/messageExtension/linkUnfurling/linkUnfurlingJson.json';
import LinkUnfurlingCode from '!!raw-loader!../../../assets/code/messageExtension/linkUnfurling/linkUnfurlingCode.js';
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";

export default function LinkUnfurling() {
  return(
    <ComponentPrototype 
      title="Link Unfurling"
      description="With link unfurling your app can register to receive an invoke 
      activity when URLs with a particular domain are pasted into the compose 
      message area. The invoke contains the full URL that was pasted into the 
      compose message area, and you can respond with a card that the user can 
      unfurl, providing additional information or actions. This works similar to 
      a search command with the URL serving as the search term."
    >
      <Flex column>
        <Flex>
          <Text weight="regular" size="large" 
            content='1. Add the search command to your app manifest:' 
          />
          </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ LinkUnfurlingJson } language='json' /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='2. Modify the "teamsBot.js" to register your message extension:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ LinkUnfurlingCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='3. Save your code and Restart your application or Deploy your 
            application to Azure again.' />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='4. You can input the url in message box which matches your 
            app mainfest:' />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/link_unfurling_text.png" />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='5. You will get a description of the link:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/link_unfurling_result.png" />
        </Flex>
      </Flex>
    </ComponentPrototype>
  )
}