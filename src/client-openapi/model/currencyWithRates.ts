/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Currency } from './currency';


export interface CurrencyWithRates { 
    targetCurrencyId: number;
    code: string;
    description?: string;
    factor?: number;
    isDisabled?: boolean;
    sourceCurrency: Currency;
    date?: string;
    rate?: number;
    /**
     * Source of exchange rates, i.e Norges Bank
     */
    source?: CurrencyWithRates.SourceEnum;
    displayName?: string;
}
export namespace CurrencyWithRates {
    export type SourceEnum = 'NORGES_BANK' | 'HALLONEN';
    export const SourceEnum = {
        NorgesBank: 'NORGES_BANK' as SourceEnum,
        Hallonen: 'HALLONEN' as SourceEnum
    };
}


