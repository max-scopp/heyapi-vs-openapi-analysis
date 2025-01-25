/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ReportSettingsHeaders } from './reportSettingsHeaders';
import { ReportSettingsAccess } from './reportSettingsAccess';
import { ReportSettingsFilters } from './reportSettingsFilters';
import { ReportSettingsFeedback } from './reportSettingsFeedback';


export interface ReportSettings { 
    headers?: ReportSettingsHeaders;
    filters?: ReportSettingsFilters;
    feedback?: ReportSettingsFeedback;
    access?: ReportSettingsAccess;
    version?: number;
}

