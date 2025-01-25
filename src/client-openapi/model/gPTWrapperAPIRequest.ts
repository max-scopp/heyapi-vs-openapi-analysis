/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ChatHistoryEntry } from './chatHistoryEntry';


/**
 * GPTWrapperAPIRequest Data Transfer Object
 */
export interface GPTWrapperAPIRequest { 
    /**
     * The question to ask the LLM
     */
    question: string;
    /**
     * Which gpt model to use, defaults to gpt-4o-mini
     */
    gpt_model: GPTWrapperAPIRequest.GptModelEnum;
    /**
     * Optional: The system prompt to the LLM
     */
    system_prompt?: string;
    /**
     * Optional: The chat history
     */
    chat_history?: Array<ChatHistoryEntry>;
    /**
     * Optional: The json schema
     */
    json_schema?: string;
}
export namespace GPTWrapperAPIRequest {
    export type GptModelEnum = 'GPT4o' | 'GPT4oMini';
    export const GptModelEnum = {
        Gpt4o: 'GPT4o' as GptModelEnum,
        Gpt4oMini: 'GPT4oMini' as GptModelEnum
    };
}


