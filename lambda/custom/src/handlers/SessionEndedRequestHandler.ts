import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response, SessionEndedRequest } from "ask-sdk-model"

export class SessionEndedRequestHandler implements RequestHandler {
    
    canHandle(handlerInput: HandlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    }

    handle(handlerInput: HandlerInput): Response {
        const request: SessionEndedRequest = <SessionEndedRequest>handlerInput.requestEnvelope.request;
        console.log(`Session ended with reason: ${request.reason}`);

        return handlerInput.responseBuilder.getResponse();
    }   
}