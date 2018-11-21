import { HandlerInput, ErrorHandler } from "ask-sdk";
import { Response } from "ask-sdk-model"

export class CustomErrorHandler implements ErrorHandler {
    
    canHandle(): boolean {
        return true;
    }

    handle(handlerInput: HandlerInput, error: Error): Response {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
          .speak('Sorry, I can\'t understand the command. Please say again.')
          .reprompt('Sorry, I can\'t understand the command. Please say again.')
          .getResponse();
    }   
}