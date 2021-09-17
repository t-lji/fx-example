const ResponseType = require("@microsoft/microsoft-graph-client");
const { CardFactory, TurnContext } = require("botbuilder");
const {
  createMicrosoftGraphClient,
  OnBehalfOfUserCredential,
} = require("@microsoft/teamsfx");
const { CardUtil } = require("../utils/CardUtil");
const { DateUtil } = require("./../utils/DateUtil");
const rawProfileCard = require("../adaptiveCards/profile.json");

class ShowUserProfile {
  constructor() {
    this.commandKey = "me";
    this.operationWithSSOToken = this.showUserInfo;
  }

  async showUserInfo(context, ssoToken) {
    await context.sendActivity("Retrieving user information from Microsoft Graph...");

    // Call Microsoft Graph on behalf of user
    const oboCredential = new OnBehalfOfUserCredential(ssoToken);
    const graphClient = createMicrosoftGraphClient(oboCredential, [
      "User.Read",
    ]);
    const profile = await graphClient.api("/me").get();

    if (profile) {
      // show user picture
      let photoBinary;
      try {
        photoBinary = await graphClient
          .api("/me/photo/$value")
          .responseType(ResponseType.ARRAYBUFFER)
          .get();
      } catch {
        return;
      }

      const arrayBuffer = await photoBinary.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const imageUri = "data:image/png;base64," + buffer.toString("base64");
      const curDate = DateUtil.formatUTCTime(new Date());

      const data = {
        "name": profile.displayName,
        "email": profile.mail,
        "jobTitle": profile.jobTitle,
        "url": imageUri,
        "date": curDate
      }

      const card = CardUtil.renderAdaptiveCard(rawProfileCard, data);
      await context.sendActivity({ attachments: [card] });
    } else {
      await context.sendActivity(
        "Could not retrieve profile information from Microsoft Graph."
      );
    }
  }

  async run(parameters) {
    const ssoDialog = parameters.ssoDialog;
    ssoDialog.setSSOOperation(this.operationWithSSOToken);
    await ssoDialog.run(parameters.context, parameters.dialogState);
  }
}

module.exports.ShowUserProfile = ShowUserProfile;
