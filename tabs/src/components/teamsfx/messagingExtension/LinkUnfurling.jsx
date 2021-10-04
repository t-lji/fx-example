import { Box, Flex, Header, Image, Segment, Text } from '@fluentui/react-northstar';
import LinkUnfurlingJson from '../../../assets/code/messageExtension/linkUnfurling/linkUnfurlingJson.json';
import LinkUnfurlingCode from '!!raw-loader!../../../assets/code/messageExtension/linkUnfurling/linkUnfurlingCode.js';
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";

export default function LinkUnfurling() {
  return (
    <Box id="welcomeCard page">
      <Header as="h4" content="Link Unfurling" />

      <Flex column>
        <Segment inverted>
          <Text weight="regular">With link unfurling your app can register to receive 
            an invoke activity when URLs with a particular domain are pasted into the 
            compose message area. The invoke contains the full URL that was pasted into 
            the compose message area, and you can respond with a card that the user can 
            unfurl, providing additional information or actions. This works similar to 
            a search command with the URL serving as the search term.
          </Text>
        </Segment>
        <Segment inverted>
          <Text content='1. Add the search command to your app manifest:' />
          <Collapse>
            <Code code={ LinkUnfurlingJson } language='json' />
          </Collapse>
        </Segment>
        <Segment inverted>
          <Text content='2. Modify the "teamsBot.js" to register your message extension:' />
          <Collapse>
            <Code code={ LinkUnfurlingCode } />
          </Collapse>
        </Segment>
        <Segment inverted>
          <Text content='3. Save your code and Restart your application or Deploy your application to Azure again.' />
        </Segment>
        <Segment inverted>
          <Text content='4. You can input the url in message box which matches your app mainfest:' />
        </Segment>
        <Segment inverted>
          <Image src="pic/link_unfurling_text.png" />
        </Segment>
        <Segment inverted>
          <Text content='5. You will get a description of the link:' />
        </Segment>
        <Segment inverted>
          <Image src="pic/link_unfurling_result.png" />
        </Segment>
      </Flex>
    </Box>
  )
}