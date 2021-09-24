// @microsoft/teams-fx
// import
const { TeamsBotSsoPrompt } = require("@microsoft/teamsfx");
// function
// new TeamsBotSsoPrompt(dialogId: string, settings: TeamsBotSsoPromptSettings)
// usage
const TEAMS_SSO_PROMPT_ID = "TeamsFxSsoPrompt";
const requiredScopes = ["User.Read"];
new TeamsBotSsoPrompt(TEAMS_SSO_PROMPT_ID, {
    scopes: requiredScopes,
    endOnInvalidMessage: true,
})