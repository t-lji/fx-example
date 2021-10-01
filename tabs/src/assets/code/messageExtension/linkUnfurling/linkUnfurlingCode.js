const {
  TeamsActivityHandler,
  CardFactory
} = require("botbuilder");

class TeamsBot extends TeamsActivityHandler {
  // Link Unfurling.
  handleTeamsAppBasedLinkQuery(context, query) {
    const attachment = CardFactory.thumbnailCard("Self-introduction", 
    'I am Ji Li, a software engineer', 
    ['https://avatars.githubusercontent.com/u/87359629?s=400&u=ecc86f5307edd4786b167750c573aa4089e90f15&v=4']);

    const result = {
      attachmentLayout: "list",
      type: "result",
      attachments: [attachment],
    };

    const response = {
      composeExtension: result,
    };
    return response;
  }
}

module.exports.TeamsBot = TeamsBot;
