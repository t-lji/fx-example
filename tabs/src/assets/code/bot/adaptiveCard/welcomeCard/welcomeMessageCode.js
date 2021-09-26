const rawWelcomeCard = require("./welcomeCardJson.json");
const txt = "yourText";

async function trigger(context) {
    switch (txt) {
        case "welcome": {
            const card = this.renderAdaptiveCard(rawWelcomeCard);
            await context.sendActivity({ attachments: [card] });
            break;
        }
        case "yourCommand": {
            await context.sendActivity(`Add your response here!`);
            break;
        }
        default:
            break;
    }
}

trigger();