// @microsoft/teams-fx
// import
const { createMicrosoftGraphClient } = require("@microsoft/teamsfx");
// function
// function createMicrosoftGraphClient(credential: TokenCredential, scopes?: string | string[])
// usage
const ssoToken = "";
new createMicrosoftGraphClient(ssoToken);