/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface MaventaEventData { 
    invoice_id: string;
    invoice_number: string;
    destination: string;
    recipient_name: string;
    recipient_bid: string;
    network: string;
    id: string;
    profiles: Array<string>;
    error_message?: string;
    recipient_eia?: string;
}

