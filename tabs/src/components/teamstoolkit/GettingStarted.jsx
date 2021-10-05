import React from "react";
import { Box, Button, Image, Text } from "@fluentui/react-northstar";
import CreateTableSQL from '!!raw-loader!../../assets/code/teamsToolkit/gettingStarted/createTableSQL.sql'
import Code from "../util/CodeUtil"

export default class GettingStarted extends React.Component {
  render() {
    return (
    <Box>
      <h1>Getting Started</h1>
      <h2>Download Sample</h2>
      <Image src="pic/getting_start_download_sample.gif" />
      <h2>Provision in the Cloud</h2>
      <Image src="pic/getting_start_provision.gif" />
      <h2>Deploy to the Cloud</h2>
      <Image src="pic/getting_start_deploy.gif" />
      <h2>Find your database</h2>
      <Text>Open <strong>.fx/env.default.json</strong> file, you could get the database name in <strong>databaseName</strong> setting</Text>
      <Text>In <Button onClick={ event => { window.open("https://ms.portal.azure.com/", "_blank"); } }>Azure portal</Button>, find the database and use query editor</Text>
      <Image src="pic/getting_start_all_resources.png" />
      <h2>Log in your database</h2>
      <Text>Use your Login and Password in step 2</Text>
      <Image src="pic/getting_start_all_resources_login.png" />
      <h2>Create database in Azure</h2>
      <Text>With below query to create a table</Text>
      <Code code={ CreateTableSQL }></Code>
      <Image src="pic/getting_start_all_resources_create_table.png" />
      <h2>Run your app</h2>
      <Text>Open Debug View <strong>(Ctrl+Shift+D)</strong>, select <strong>Launch Remote (Edge)</strong>, then Click <strong>start</strong> or Press <strong>F5</strong></Text>
      <Image src="pic/getting_start_run.png" />
      <h2>Select scope of your app</h2>
      <Image src="pic/getting_start_select_scope.png" />
      <h2>Set up your app for your selected scope</h2>
      <Image src="pic/getting_start_set_up.png" />
      <h2>Confirm your tab configuration for your selected scope</h2>
      <Image src="pic/getting_start_tab_configuration.png" />
      <h2>Enter the app for the first time</h2>
      <Image src="pic/getting_start_start_page.png" />
      <h2>Accept permission for use your profile</h2>
      <Image src="pic/getting_start_permission_page.png" />
      <h2>Enjoy your first app in Teams</h2>
      <Image src="pic/getting_start_result.gif" />
    </Box>
    )
  }
}
