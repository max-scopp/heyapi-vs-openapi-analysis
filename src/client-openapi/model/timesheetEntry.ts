/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Project } from './project';
import { TimeClock } from './timeClock';
import { Employee } from './employee';
import { Invoice } from './invoice';
import { Activity } from './activity';
import { Change } from './change';


export interface TimesheetEntry { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    project?: Project;
    activity: Activity;
    date: string;
    hours: number;
    readonly chargeableHours?: number;
    employee: Employee;
    /**
     * Link to stop watches on this hour.
     */
    readonly timeClocks?: Array<TimeClock>;
    comment?: string;
    /**
     * Indicates if the hour can be changed.
     */
    readonly locked?: boolean;
    readonly chargeable?: boolean;
    invoice?: Invoice;
    readonly hourlyRate?: number;
    readonly hourlyCost?: number;
    readonly hourlyCostPercentage?: number;
    /**
     * Number of chargeable hours on an activity connected to a project.
     */
    projectChargeableHours?: number;
}

