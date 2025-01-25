/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Account } from './account';
import { Customer } from './customer';
import { Supplier } from './supplier';
import { Change } from './change';
import { VatType } from './vatType';


export interface PaymentType { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    description: string;
    displayName: string;
    debitAccount?: Account;
    creditAccount?: Account;
    vatType?: VatType;
    /**
     * Defines the priority of order, when displayed in a list with order payment types
     */
    sequence?: number;
    customer?: Customer;
    supplier?: Supplier;
    readonly currencyId?: number;
}

