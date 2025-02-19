/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Invoice } from './invoice';
import { DynamicControlFormTemplate } from './dynamicControlFormTemplate';
import { Change } from './change';


export interface DynamicControlForm { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    title?: string;
    comment?: string;
    projectId?: number;
    originalTemplate?: DynamicControlFormTemplate;
    isCompleted?: boolean;
    readonly isSigned?: boolean;
    attachmentId?: number;
    documentId?: number;
    addToInvoice?: number;
    fieldValues?: { [key: string]: object; };
    readonly isSentToBoligmappa?: boolean;
    lastSentToBoligmappaDate?: string;
    readonly isInvoiced?: boolean;
    readonly connectedInvoices?: Array<Invoice>;
    readonly isSentWithEmail?: boolean;
    lastSentWithEmailDate?: string;
    readonly guid?: string;
}

