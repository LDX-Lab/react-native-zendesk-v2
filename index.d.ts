declare module "react-native-zendesk-v2" {
  // function to display chat box
  export function startChat(chatOptions: ChatOptions): void;

  // normal init function when you want to use all of the sdks
  export function init(initializationOptins: InitOptions): void;

  // init function when you just want to use chat sdk
  export function initChat(accountKey: string): void;

  // function to display help center UI
  export function showHelpCenter(helpCenterOptions: HelpCenterOptions): void;

  // function to set visitor info in chat
  export function setVisitorInfo(visitorInfo: UserInfo): void;

  // function to set visitor info in chat
  export function setUserIdentity(userIdentity: UserInfo): void;

  // function to register notifications token with zendesk
  export function setNotificationToken(token: string): void;

  interface ChatOptions extends UserInfo {
    botName?: string;
    // boolean value if you want just chat sdk or want to use all the sdk like support, answer bot and chat
    // true value means just chat sdk
    chatOnly?: boolean;
  }

  interface HelpCenterOptions {
    // sent in help center function only to show help center with/without chat
    withChat?: boolean;

    // to enable/disable ticket creation in help center
    withTicketCreation?: boolean;

    // List of section IDs to fetch articles from
    sectionIds?: string[];
  }

  interface InitOptions {
    // chat key of zendesk account to init chat
    key: string;

    // appId of your zendesk account
    appId: string;

    // clientId of your zendesk account
    clientId: string;

    // support url of zendesk account
    url: string;

    // starts the sdk as loggable (debug mode)
    loggable?: boolean;
  }

  interface UserInfo {
    // user's name
    name: string;
    // user's email
    email: string;
    // user's phone
    phone?: number;
    // department to redirect the chat
    department?: string;
    // tags for chat
    tags?: Array<string>;
  }
}
