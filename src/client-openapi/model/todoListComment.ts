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
import { Change } from './change';


export interface TodoListComment { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    customerId: number;
    employee: Employee;
    type: string;
    periodStart: string;
    comment: string;
    readonly createdAt?: string;
}

