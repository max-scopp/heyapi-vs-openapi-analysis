/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { YearEndReportPost } from './yearEndReportPost';


export interface YearEndReportType { 
    readonly sumAmount?: number;
    readonly sumAmountPreviousYear?: number;
    posts?: Array<YearEndReportPost>;
}

