const { CardUtil } = require("../utils/CardUtil");
const rawWelcomeCard = require("../adaptiveCards/welcome.json");

class WelcomeCommand {
  constructor() {
    this.commandKey = "welcome";
  }
  
  async run(parameters) {
    const card = CardUtil.renderAdaptiveCard(rawWelcomeCard);
    return await parameters.context.sendActivity({ attachments: [card] });
  }
}

module.exports.WelcomeCommand = WelcomeCommand;
