/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface TodoListItemStatus { 
    type?: TodoListItemStatus.TypeEnum;
    message?: string;
    lastUpdatedBy?: string;
    lastUpdatedDate?: string;
}
export namespace TodoListItemStatus {
    export type TypeEnum = 'OVERDUE' | 'NOT_STARTED' | 'INCOMPLETE' | 'COMPLETED' | 'NOT_APPLICABLE';
    export const TypeEnum = {
        Overdue: 'OVERDUE' as TypeEnum,
        NotStarted: 'NOT_STARTED' as TypeEnum,
        Incomplete: 'INCOMPLETE' as TypeEnum,
        Completed: 'COMPLETED' as TypeEnum,
        NotApplicable: 'NOT_APPLICABLE' as TypeEnum
    };
}


