const {
  Dialog,
  DialogSet,
  DialogTurnStatus,
  WaterfallDialog,
  ComponentDialog,
} = require("botbuilder-dialogs");
const {
  ActivityTypes,
  tokenExchangeOperationName
} = require("botbuilder");
const { loadConfiguration, TeamsBotSsoPrompt } = require("@microsoft/teamsfx");
require("isomorphic-fetch");

const DIALOG_NAME = "SSODialog";
const MAIN_WATERFALL_DIALOG = "MainWaterfallDialog";
const TEAMS_SSO_PROMPT_ID = "TeamsFxSsoPrompt";

class SSODialog extends ComponentDialog {
  // Developer controlls the lifecycle of credential provider, as well as the cache in it.
  // In this sample the provider is shared in all conversations
  constructor(dedupStorage) {
    super(DIALOG_NAME);
    loadConfiguration();
    // hard code the scopes for demo purpose only
    this.requiredScopes = ["User.Read"];

    this.addDialog(
      new TeamsBotSsoPrompt(TEAMS_SSO_PROMPT_ID, {
        scopes: this.requiredScopes,
        endOnInvalidMessage: true,
      })
    );

    this.addDialog(
      new WaterfallDialog(MAIN_WATERFALL_DIALOG, [
        this.ssoStep.bind(this),
        this.dedupStep.bind(this),
        this.executeOperationWithSSO.bind(this),
      ])
    );

    this.initialDialogId = MAIN_WATERFALL_DIALOG;
    this.dedupStorage = dedupStorage;
    this.dedupStorageKeys = [];
  }

  setSSOOperation(
    handler
  ) {
    this.operationWithSSO = handler;
  }

  resetSSOOperation() {
    this.operationWithSSO = undefined;
  }

  /**
   * The run method handles the incoming activity (in the form of a DialogContext) and passes it through the dialog system.
   * If no dialog is active, it will start the default dialog.
   * @param {*} dialogContext
   */
  async run(context, dialogState) {
    const dialogSet = new DialogSet(dialogState);
    dialogSet.add(this);

    const dialogContext = await dialogSet.createContext(context);
    let dialogTurnResult = await dialogContext.continueDialog();
    if (dialogTurnResult.status === DialogTurnStatus.empty) {
      dialogTurnResult = await dialogContext.beginDialog(this.id);
    }

    // Once got ssoToken, run operation that depends on ssoToken
    if (dialogTurnResult.result?.ssoToken && this.operationWithSSO) {
      await this.operationWithSSO(context, dialogTurnResult.result?.ssoToken);
      this.resetSSOOperation();
      await dialogContext.endDialog();
    }
  }

  async ssoStep(stepContext) {
    return await stepContext.beginDialog(TEAMS_SSO_PROMPT_ID);
  }

  async executeOperationWithSSO(stepContext) {
    const tokenResponse = stepContext.result;
    if (!tokenResponse || !tokenResponse.ssoToken) {
      return;
    }

    // Once got ssoToken, run operation that depends on ssoToken
    if (this.operationWithSSO) {
      await this.operationWithSSO(stepContext.context, tokenResponse.ssoToken);
    }
    return await stepContext.endDialog();
  }

  async dedupStep(stepContext) {
    const tokenResponse = stepContext.result;

    // Only dedup after ssoStep to make sure that all Teams client would receive the login request
    if (tokenResponse && (await this.shouldDedup(stepContext.context))) {
      return Dialog.EndOfTurn;
    }

    if (!tokenResponse || !tokenResponse.ssoToken) {
      await stepContext.context.sendActivity(
        "Token exchange was not successful please try again."
      );
    }

    return await stepContext.next(tokenResponse);
  }

  async onEndDialog(context) {
    const conversationId = context.activity.conversation.id;
    const currentDedupKeys = this.dedupStorageKeys.filter(
      (key) => key.indexOf(conversationId) > 0
    );
    await this.dedupStorage.delete(currentDedupKeys);
    this.dedupStorageKeys = this.dedupStorageKeys.filter(
      (key) => key.indexOf(conversationId) < 0
    );
    this.resetSSOOperation();
  }

  // If a user is signed into multiple Teams clients, the Bot might receive a "signin/tokenExchange" from each client.
  // Each token exchange request for a specific user login will have an identical activity.value.Id.
  // Only one of these token exchange requests should be processed by the bot.  For a distributed bot in production,
  // this requires a distributed storage to ensure only one token exchange is processed.
  async shouldDedup(context) {
    const storeItem = {
      eTag: context.activity.value.id,
    };
    const key = this.getStorageKey(context);
    const storeItems = { [key]: storeItem };
    try {
      await this.dedupStorage.write(storeItems);
      this.dedupStorageKeys.push(key);
    } catch (err) {
      if (err instanceof Error && err.message.indexOf("eTag conflict")) {
        return true;
      }
      throw err;
    }
    return false;
  }
  
  getStorageKey(context) {
    if (!context || !context.activity || !context.activity.conversation) {
      throw new Error("Invalid context, can not get storage key!");
    }
    const activity = context.activity;
    const channelId = activity.channelId;
    const conversationId = activity.conversation.id;
    if (
      activity.type !== ActivityTypes.Invoke ||
      activity.name !== tokenExchangeOperationName
    ) {
      throw new Error(
        "TokenExchangeState can only be used with Invokes of signin/tokenExchange."
      );
    }
    const value = activity.value;
    if (!value || !value.id) {
      throw new Error(
        "Invalid signin/tokenExchange. Missing activity.value.id."
      );
    }
    return `${channelId}/${conversationId}/${value.id}`;
  }
}

module.exports.SSODialog = SSODialog;
