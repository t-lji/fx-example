import React from "react";
import { Box, Header } from '@fluentui/react-northstar'
/**
 * This component is used to display the required
 * terms of use statement which can be found in a
 * link in the about tab.
 */
class TermsOfUse extends React.Component {
  render() {
    return (
      <Box>
        <Header as="h1">Terms of Use</Header>
      </Box>
    );
  }
}

export default TermsOfUse;
