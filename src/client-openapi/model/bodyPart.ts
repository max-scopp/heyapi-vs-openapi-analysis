/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ParameterizedHeader } from './parameterizedHeader';
import { MultiPart } from './multiPart';
import { ContentDisposition } from './contentDisposition';
import { MediaType } from './mediaType';


export interface BodyPart { 
    contentDisposition?: ContentDisposition;
    entity?: object;
    headers?: { [key: string]: Array<string>; };
    mediaType?: MediaType;
    messageBodyWorkers?: object;
    parent?: MultiPart;
    providers?: object;
    parameterizedHeaders?: { [key: string]: Array<ParameterizedHeader>; };
}

