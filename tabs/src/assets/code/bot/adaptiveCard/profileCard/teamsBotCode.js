const {
  TeamsActivityHandler,
  TurnContext,
  MemoryStorage,
  ConversationState,
  UserState,
} = require("botbuilder");
const { SSODialog } = require("./dialogs/ssoDialog");
const { CommandsHandler } = require("./utils/commandUtil");

class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();
    // Define the state store for your bot.
    // See https://aka.ms/about-bot-state to learn more about using MemoryStorage.
    // A bot requires a state storage system to persist the dialog and user state between messages.
    const memoryStorage = new MemoryStorage();

    // Create conversation and user state with in-memory storage provider.
    this.conversationState = new ConversationState(memoryStorage);
    this.userState = new UserState(memoryStorage);
    this.dialog = new SSODialog(new MemoryStorage());
    this.dialogState = this.conversationState.createProperty("DialogState");

    // Register and trigger commands
    this.commandsHandler = new CommandsHandler();

    this.onMessage(async (context, next) => {
      console.log("Running with Message Activity.");

      let txt = context.activity.text;
      const removedMentionText = TurnContext.removeRecipientMention(
        context.activity
      );
      if (removedMentionText) {
        // Remove the line break
        txt = removedMentionText.toLowerCase().replace(/\n|\r/g, "").trim();
      }

      // Trigger command by IM text
      await this.commandsHandler.triggerCommand(txt, {
        context: context,
        ssoDialog: this.dialog,
        dialogState: this.dialogState,
      });

      // By calling next() you ensure that the next BotHandler is run.
      await next();
    });
  }

  async run(context) {
    await super.run(context);

    // Save any state changes. The load happened during the execution of the Dialog.
    await this.conversationState.saveChanges(context, false);
    await this.userState.saveChanges(context, false);
  }

  async handleTeamsSigninVerifyState(
    context,
    query
  ) {
    console.log(
      "Running dialog with signin/verifystate from an Invoke Activity."
    );
    await this.dialog.run(context, this.dialogState);
  }

  async handleTeamsSigninTokenExchange(
    context,
    query
  ) {
    await this.dialog.run(context, this.dialogState);
  }

  async onSignInInvoke(context) {
    await this.dialog.run(context, this.dialogState);
  }
}

module.exports.TeamsBot = TeamsBot;
