import { 
  AcceptIcon,
  BanIcon,
  CallPstnIcon,
  Flex, 
  OneDriveIcon,
  QuestionCircleIcon,
  Status } from '@fluentui/react-northstar'

<Flex column>
  <Flex>
    <Status state="success" title="success" icon={ <AcceptIcon /> } /> <code>state="success"</code>
  </Flex>
  <Flex>
    <Status state="info" title="info" icon={ <OneDriveIcon /> } /> <code>state="info"</code>
  </Flex>
  <Flex>
    <Status state="warning" title="warning" icon={ <CallPstnIcon /> } /> <code>state="warning"</code>
  </Flex>
  <Flex>
    <Status state="error" title="error" icon={ <BanIcon /> } /> <code>state="error"</code>
  </Flex>
  <Flex>
    <Status state="unknown" title="unknown" icon={ <QuestionCircleIcon /> } /> <code>state="unknown"</code>
  </Flex>
</Flex>