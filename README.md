# Overview

At current stage, Teams App has a wealth of features and many applications. At present, however, only the web documents provide information on these features. This way has a weak direct-viewing display effect. Therefore, this Teams App to show Teams Extension (Teams Toolkit) features. The goal is to allow all the developers, especially rookies, of Teams App to easily access it and get a better development experience.

[What is Teams app capabilities](https://aka.ms/teamsfx-capabilities-overview)

# Features

- Simple, intuitive interface for all developers for developers with limited acknowledge and experience on Teams App to be as simple and intuitive as possible.
- Efficient – since reading documents and finding APIs on webs is time consuming, my App had to be efficient with examples such as getting the user information, uploading/downloading files and showing UI components.
- Cross platform[optional] – the App be available across 2 platforms: Teams Client and Mobile Teams App. I chose to adaptive design to achieve the same experience both on computers and mobile phones.

# Interface

## App

### Teams Toolkit

This part shows our Teams Extension (Teams Toolkit) features, I may show almost all the features in the form of GIF graph and give tips:

1. GETTING STARTED: information about how to create an App by using a sample
2. PROJECT: includes Create New Project, Add Capabilities, Deploy to the Cloud and so on. You can create your own App and publish it on the Azure or Teams just in Visual Studio Code.

### TeamsFx

This part shows our Teams App ability and how to use Microsoft Graph API in Teams, I may show some features in the form of GIF graph and give tips on @microsoft/teams-js and @microsoft/teamsfx SDK:

1. Tab: includes Deeplink/Mobile tab[optional]/Static Tab - [README](./tabs/README.md)
2. Bot: includes Adaptive Card - [README](./bot/README.md)
3. Messaging Extension: includes Action Commands/Search Commands/Link Unfurling

### UI

@fluentui/react-northstar - A themable React component library.

The UI components are derived from [@fluentui/react-northstar](https://fluentsite.z22.web.core.windows.net/0.57.0/) and are divided into 3 parts:

1. Overall: includes theming and layout aspects components
2. Component: logically divided into multiple parts instead of sorting in alphabetical order
3. Prototypes: includes complex or combined components