import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model"

export class CancelAndStopIntentHandler implements RequestHandler {
    
    canHandle(handlerInput: HandlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
          || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    }

    handle(handlerInput: HandlerInput): Response {
        const speechText = 'Goodbye!';

        return handlerInput.responseBuilder
          .speak(speechText)
          .withSimpleCard('Hello World', speechText)
          .getResponse();
    }   
}