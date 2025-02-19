/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BalanceData } from './balanceData';
import { ForestFundData } from './forestFundData';
import { Department } from './department';
import { ProfitAndLossData } from './profitAndLossData';
import { TransferredData } from './transferredData';
import { ExtraordinaryDistributionData } from './extraordinaryDistributionData';
import { TimberGroupDetails } from './timberGroupDetails';


export interface TimberAccount { 
    department?: Department;
    readonly groupId?: number;
    salesIncomeAndWithdrawalsTimberPulpwoodEtc?: TimberGroupDetails;
    salesIncomeAndWithdrawalsFirewoodBiomass?: TimberGroupDetails;
    incomeHuntingFishingEtc?: TimberGroupDetails;
    revenueRecognitionNegativeBalance?: TimberGroupDetails;
    incomeDeductionProfitAndLoss?: TimberGroupDetails;
    operatingRevenuesIncTaxablePartOfForestFund?: TimberGroupDetails;
    operatingCostIncDepreciationAndAllocationForestFund?: TimberGroupDetails;
    transferredFromPreviousYear?: TimberGroupDetails;
    forestFundPaymentToPurposeWithTaxAssets?: TimberGroupDetails;
    paidUpGovernmentContributionsToForestFund?: TimberGroupDetails;
    taxAssetsForestFund?: TimberGroupDetails;
    reversalOfPrevCalculatedTaxAssetsForestFund?: TimberGroupDetails;
    forestFundPaymentToPurposeWithoutTaxAssets?: TimberGroupDetails;
    taxableIncomeForestFund?: TimberGroupDetails;
    transferredData?: TransferredData;
    balanceData?: BalanceData;
    profitAndLossData?: ProfitAndLossData;
    extraordinaryDistributionData?: ExtraordinaryDistributionData;
    forestFundData?: ForestFundData;
}

