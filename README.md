# Overview

At current stage, Teams App has a wealth of features and many applications. At present, however, only the web documents provide information on these features. This way has a weak direct-viewing display effect. Therefore, this Teams App to show Teams Extension (Teams Toolkit) features. The goal is to allow all the developers, especially rookies, of Teams App to easily access it and get a better development experience.

[What is Teams app capabilities](https://aka.ms/teamsfx-capabilities-overview)

# Features

- Simple, intuitive interface for all developers for developers with limited acknowledge and experience on Teams App to be as simple and intuitive as possible.
- Efficient – since reading documents and finding APIs on webs is time consuming, this App had to be efficient with examples such as getting the user information, uploading/downloading files and showing UI components.
- Cross platform[optional] – the App be available across 2 platforms: Teams Client and Mobile Teams App. The app will be designed adaptively to achieve the same experience both on computers and mobile phones.

# Structure

![Structure](https://user-images.githubusercontent.com/87359629/137247676-f46624aa-9927-432a-8c8e-966fde431aae.png)

## App

### Teams Toolkit

This part shows Teams Extension (Teams Toolkit) features, there are GIF pictures to display almost all the features giving tips:

- **GETTING STARTED**: information about how to create an App by using a sample
- **PROJECT**: includes Create New Project, Add Capabilities, Deploy to the Cloud and so on. You can create your own App and publish it on the Azure or Teams just in Visual Studio Code.

### Teams Dev

This part shows how to use Teams App ability step by step and [Microsoft Graph API](https://developer.microsoft.com/en-us/graph/graph-explorer) in Teams, there are GIF pictures to display some features and giving tips on [@microsoft/teams-js](https://docs.microsoft.com/en-us/javascript/api/@microsoft/teams-js/?view=msteams-client-js-latest) and [@microsoft/teamsfx](https://docs.microsoft.com/en-us/javascript/api/@microsoft/teamsfx/?view=msteams-client-js-latest) SDK:

- **Tab**: includes Deeplink/Mobile tab[optional]/Static Tab - [README](./tabs/README.md)
- **Bot**: includes Adaptive Card - [README](./bot/README.md)
- **Messaging Extension**: includes Action Commands/Search Commands/Link Unfurling

### UI

**@fluentui/react-northstar** - A themable React component library.

The UI components are derived from [@fluentui/react-northstar](https://fluentsite.z22.web.core.windows.net/0.57.0/) and are divided into 3 parts:

- **Overall**: includes theming and layout aspects components
- **Component**: logically divided into multiple parts instead of sorting in alphabetical order
- **Prototypes**: includes complex or combined components

# Prerequisites

- [Node.js](https://nodejs.org/en/) (use the latest v14 LTS release)
- An M365 account. If you do not have M365 account, apply one from [M365 developer program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)
- A browser with developer tools, such as, [Microsoft Edge](https://www.microsoft.com/en-us/edge) (recommended) or Google Chrome
- Install [Visual Studio Code](https://code.visualstudio.com/download), version 1.55 or later.
- [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) or [TeamsFx CLI](https://aka.ms/teamsfx-cli)

# Enable Sideloading
1. Sign in to [Microsoft 365 admin center](https://admin.microsoft.com/Adminportal/Home?source=applauncher#/homepage#%2F)
2. select **Show all > Teams**

![M365 Teams](https://user-images.githubusercontent.com/87359629/137050835-8cb5a2d1-d79d-49b4-bab0-ec8daabd71a9.png)

3. Navigate to **Teams apps > Setup Policies > Global**.

![Setup](https://user-images.githubusercontent.com/87359629/137051062-70ea5db4-331d-487b-9959-de76a8156a26.png)

4. Toggle Upload custom apps to the **On** position.
5. Select **Save**. Your test tenant can permit custom app sideloading.

# Getting Started
To use the app in Teams, download the [release](https://github.com/t-lji/fx-example/releases/tag/v1.0.0) zip file first.

1. Upload this app to your Teams

![upload to Teams](https://user-images.githubusercontent.com/87359629/136642265-d7c18c34-a9bc-4da0-b7c7-6b61a8bb4a1b.png)

  - 1.1 Press `...` and choose **More app** Or Press **App** icon in the left bottom
  - 1.2 Press **Upload a custom app**
2. Upload `appPackage.zip`
3. Sideload App by directly press **Add** (recommended) or add this app to your channel

![Sideload](https://user-images.githubusercontent.com/87359629/136642391-e5d20b7d-98f4-42b3-9ad5-538111c9ed43.png)

4. Enjoy exploring the App!
  - 4.1 Sideload:

  ![Sideload](https://user-images.githubusercontent.com/87359629/136642445-60c87b9a-bf4a-40d6-9aac-114acc0a3c91.png)
  
  - 4.2 channel:
  
  ![channel](https://user-images.githubusercontent.com/87359629/136642462-acc23084-0f0a-480d-9602-c05f40566fbe.png)

# Debug/Run project
- Debug: Open Debug View (`Ctrl+Shift+D`), select **Debug Remote (Edge)**, then Click  `start Debugging` or Press `F5`
- Run: Open Debug View (`Ctrl+Shift+D`), select **Launch Remote (Edge)**, then Click  `start Debugging` or Press `F5`

![Debug/Run project](tabs/public/pic/getting_start_run.png)

# Collaboration
`Attention`: The M365 Account of Collaborators shoule be the same tenant with the owner of the App.

1. Sign in to [Microsoft 365 admin center](https://admin.microsoft.com/Adminportal/Home?source=applauncher#/homepage#%2F)
2. select **Users > Active users**, add user to your tenant

![Admin Center add user](https://user-images.githubusercontent.com/87359629/137248753-11a4e176-60aa-41f9-8d24-81a214dc630c.png)

3. Sign in to [Azure Portal](https://ms.portal.azure.com/#home)
4. Search for Users, add New user or Invite user

![Azure Portal add user](https://user-images.githubusercontent.com/87359629/137249140-3bb1fd19-2108-41a2-aa3f-1faafa7406bc.png)

5. Choose to Create user or Invite user

![Azure Portal invite user](https://user-images.githubusercontent.com/87359629/137260029-92f22dca-eb6a-42b8-a3bb-fa9461fd7c29.png)

6. Accept the invitation in your mailbox

![Accept the invitation](https://user-images.githubusercontent.com/87359629/137249525-2b3a1ff2-ad4b-4a09-bb7a-73a068da4462.png)

![Review permissions](https://user-images.githubusercontent.com/87359629/137249706-42840400-375e-4a73-9a6f-3b07ff0dfdbd.png)

7. Select **Azure Active Directory > App registrations > Your App > Owners**, then add owner

![add Owners](https://user-images.githubusercontent.com/87359629/137261599-e2412a69-c71b-4805-993a-ebec2e947d61.png)

![select Owners](https://user-images.githubusercontent.com/87359629/137261835-978829ac-03d5-4f75-9222-757112c59938.png)

8. Sign in to [Developer Portal](https://dev.teams.microsoft.com/home)
9. Choose app, and add owners of your app

![choose app](https://user-images.githubusercontent.com/87359629/137262166-014ae69d-503a-435a-936d-a34c1ab9342a.png)

![add app Owners](https://user-images.githubusercontent.com/87359629/137262289-65b9f00d-b16e-4e73-a290-28db5af8bf15.png)

![search app Owners](https://user-images.githubusercontent.com/87359629/137263102-98b31c15-46a0-4c38-89d6-aed5b750aeaa.png)