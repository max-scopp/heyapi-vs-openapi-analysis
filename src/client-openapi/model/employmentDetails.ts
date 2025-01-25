/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MaritimeEmployment } from './maritimeEmployment';
import { Municipality } from './municipality';
import { Employment } from './employment';
import { Change } from './change';
import { OccupationCode } from './occupationCode';


export interface EmploymentDetails { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employment?: Employment;
    date?: string;
    /**
     * Define the employment type.
     */
    employmentType?: EmploymentDetails.EmploymentTypeEnum;
    /**
     * Define the employment form.
     */
    employmentForm?: EmploymentDetails.EmploymentFormEnum;
    maritimeEmployment?: MaritimeEmployment;
    /**
     * Define the remuneration type.
     */
    remunerationType?: EmploymentDetails.RemunerationTypeEnum;
    /**
     * Define the working hours scheme type. If you enter a value for SHIFT WORK, you must also enter value for shiftDurationHours
     */
    workingHoursScheme?: EmploymentDetails.WorkingHoursSchemeEnum;
    shiftDurationHours?: number;
    occupationCode?: OccupationCode;
    percentageOfFullTimeEquivalent: number;
    annualSalary?: number;
    hourlyWage?: number;
    payrollTaxMunicipalityId?: Municipality;
    readonly monthlySalary?: number;
}
export namespace EmploymentDetails {
    export type EmploymentTypeEnum = 'ORDINARY' | 'MARITIME' | 'FREELANCE' | 'NOT_CHOSEN';
    export const EmploymentTypeEnum = {
        Ordinary: 'ORDINARY' as EmploymentTypeEnum,
        Maritime: 'MARITIME' as EmploymentTypeEnum,
        Freelance: 'FREELANCE' as EmploymentTypeEnum,
        NotChosen: 'NOT_CHOSEN' as EmploymentTypeEnum
    };
    export type EmploymentFormEnum = 'PERMANENT' | 'TEMPORARY' | 'PERMANENT_AND_HIRED_OUT' | 'TEMPORARY_AND_HIRED_OUT' | 'TEMPORARY_ON_CALL' | 'NOT_CHOSEN';
    export const EmploymentFormEnum = {
        Permanent: 'PERMANENT' as EmploymentFormEnum,
        Temporary: 'TEMPORARY' as EmploymentFormEnum,
        PermanentAndHiredOut: 'PERMANENT_AND_HIRED_OUT' as EmploymentFormEnum,
        TemporaryAndHiredOut: 'TEMPORARY_AND_HIRED_OUT' as EmploymentFormEnum,
        TemporaryOnCall: 'TEMPORARY_ON_CALL' as EmploymentFormEnum,
        NotChosen: 'NOT_CHOSEN' as EmploymentFormEnum
    };
    export type RemunerationTypeEnum = 'MONTHLY_WAGE' | 'HOURLY_WAGE' | 'COMMISION_PERCENTAGE' | 'FEE' | 'NOT_CHOSEN' | 'PIECEWORK_WAGE';
    export const RemunerationTypeEnum = {
        MonthlyWage: 'MONTHLY_WAGE' as RemunerationTypeEnum,
        HourlyWage: 'HOURLY_WAGE' as RemunerationTypeEnum,
        CommisionPercentage: 'COMMISION_PERCENTAGE' as RemunerationTypeEnum,
        Fee: 'FEE' as RemunerationTypeEnum,
        NotChosen: 'NOT_CHOSEN' as RemunerationTypeEnum,
        PieceworkWage: 'PIECEWORK_WAGE' as RemunerationTypeEnum
    };
    export type WorkingHoursSchemeEnum = 'NOT_SHIFT' | 'ROUND_THE_CLOCK' | 'SHIFT_365' | 'OFFSHORE_336' | 'CONTINUOUS' | 'OTHER_SHIFT' | 'NOT_CHOSEN';
    export const WorkingHoursSchemeEnum = {
        NotShift: 'NOT_SHIFT' as WorkingHoursSchemeEnum,
        RoundTheClock: 'ROUND_THE_CLOCK' as WorkingHoursSchemeEnum,
        Shift365: 'SHIFT_365' as WorkingHoursSchemeEnum,
        Offshore336: 'OFFSHORE_336' as WorkingHoursSchemeEnum,
        Continuous: 'CONTINUOUS' as WorkingHoursSchemeEnum,
        OtherShift: 'OTHER_SHIFT' as WorkingHoursSchemeEnum,
        NotChosen: 'NOT_CHOSEN' as WorkingHoursSchemeEnum
    };
}


