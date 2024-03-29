const rawWelcomeCard = require("./welcomeCardJson.json");

this.onMembersAdded(async (context, next) => {
  const membersAdded = context.activity.membersAdded;
  for (let cnt = 0; cnt < membersAdded.length; cnt++) {
    if (membersAdded[cnt].id) {
      const card = this.renderAdaptiveCard(
      rawWelcomeCard,
      this.likeCountObj
      );
      await context.sendActivity({ attachments: [card] });
      break;
    }
  }
  await next();
});