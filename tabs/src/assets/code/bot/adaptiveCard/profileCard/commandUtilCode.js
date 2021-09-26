const { ShowUserProfile } = require("../commands/showUserProfile");

const CommandClasses = [ShowUserProfile];

class CommandsHandler {
  commandInstanceMap = new Map();
  constructor() {
    this.registerCommand();
  }

  registerCommand() {
    CommandClasses.forEach(commandClass => {
      const commandInstance = new commandClass();
      this.commandInstanceMap.set(commandInstance.commandKey, commandInstance);
    });
  }

  async triggerCommand(commandKey, parameters) {    
    if(!this.commandInstanceMap.has(commandKey)){
      return;
    }
    const commandInstance = this.commandInstanceMap.get(commandKey);
    await commandInstance.run(parameters);
  }
}

module.exports = {
  CommandClasses,
  CommandsHandler
}
