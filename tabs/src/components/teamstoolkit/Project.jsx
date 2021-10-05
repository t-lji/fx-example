import React from "react";
import { Box, Image, Text } from "@fluentui/react-northstar";

class Project extends React.Component {
  render() {
    return (
    <Box>
      <h1>Project</h1>
      <h2>Create New Project</h2>
      <Image src="pic/create_new_project.gif" />
      <h2>Provision in the Cloud</h2>
      <Image src="pic/provision_in_the_cloud.gif" />
      <h2>Deploy to the Cloud</h2>
      <Image src="pic/deploy_to_the_cloud.gif" />
      <h2>Local Debug</h2>
      <Text>Or just press <strong>F5</strong></Text>
      <Image src="pic/local_dubug.gif" />
      <Text>Local Dubug Page</Text>
      <Image src="pic/local_dubug_web_page.gif" />
      <h2>Add Capabilities</h2>
      <Image src="pic/add_capabilities.gif" />
    </Box>
    )
  }
}

export default Project;