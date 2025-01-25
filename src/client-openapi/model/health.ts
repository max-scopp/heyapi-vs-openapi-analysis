/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ShardHealthStatus } from './shardHealthStatus';


export interface Health { 
    readonly timestamp?: string;
    readonly healthCheckDurationMs?: number;
    readonly percentageOfUnhealthyCompanies?: number;
    readonly percentageOfUnhealthyShards?: number;
    readonly shardHealthStatus?: Array<ShardHealthStatus>;
}

