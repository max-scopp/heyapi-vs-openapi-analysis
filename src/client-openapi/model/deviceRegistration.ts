/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Change } from './change';
import { MobileSubscription } from './mobileSubscription';


export interface DeviceRegistration { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    mobileSubscription?: MobileSubscription;
    /**
     * Device registration token.
     */
    deviceRegistrationToken: string;
}

