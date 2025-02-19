/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Employee } from './employee';
import { ApiConsumer } from './apiConsumer';
import { Change } from './change';


export interface EmployeeToken { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employee?: Employee;
    apiConsumer?: ApiConsumer;
    token: string;
    expirationDate?: string;
}

