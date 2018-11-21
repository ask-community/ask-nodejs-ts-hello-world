import { SkillBuilders } from "ask-sdk";

import { LaunchRequestHandler } from "./handlers/LaunchRequestHandler";
import { HelloWorldIntentHandler } from "./handlers/HelloWorldIntentHandler";
import { HelpIntentHandler } from "./handlers/HelpIntentHandler";
import { CancelAndStopIntentHandler } from "./handlers/CancelAndStopIntentHandler";
import { SessionEndedRequestHandler } from "./handlers/SessionEndedRequestHandler";
import { CustomErrorHandler } from "./handlers/CustomErrorHandler";

const skillBuilder = SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    new LaunchRequestHandler(),
    new HelloWorldIntentHandler(),
    new HelpIntentHandler(),
    new CancelAndStopIntentHandler(),
    new SessionEndedRequestHandler()
  )
  .addErrorHandlers(new CustomErrorHandler)
  .lambda();