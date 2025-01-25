/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface IncomingOrderLineWrite { 
    /**
     * ID of the incoming invoice draft.
     */
    incomingOrderLineDraftId?: number;
    /**
     * ID of the incoming order line.
     */
    incomingOrderLineId?: number;
    /**
     * Client UUID.
     */
    clientUUId?: string;
    /**
     * Row number of the order line.
     */
    row?: number;
    /**
     * Description of the order line.
     */
    description?: string;
    /**
     * ID of the account.
     */
    accountId?: number;
    /**
     * Count of the order line.
     */
    count?: number;
    /**
     * Unit price of the order line.
     */
    unitPrice?: number;
    /**
     * Amount excluding VAT.
     */
    amountExclVat?: number;
    /**
     * Amount including VAT.
     */
    amountInclVat?: number;
    /**
     * ID of the VAT type.
     */
    vatTypeId?: number;
    /**
     * ID of the department.
     */
    departmentId?: number;
    /**
     * ID of the project.
     */
    projectId?: number;
    /**
     * ID of the employee.
     */
    employeeId?: number;
    /**
     * ID of the product.
     */
    productId?: number;
    /**
     * ID of the asset.
     */
    assetId?: number;
    /**
     * ID of the customer.
     */
    customerId?: number;
    /**
     * ID of the vendor.
     */
    vendorId?: number;
    /**
     * Type of tax transaction.
     */
    taxTransactionType?: IncomingOrderLineWrite.TaxTransactionTypeEnum;
    /**
     * Quantity amount 1.
     */
    quantityAmount1?: number;
    /**
     * ID of the product unit 1.
     */
    productUnitId1?: number;
    /**
     * Quantity amount 2.
     */
    quantityAmount2?: number;
    /**
     * ID of the product unit 2.
     */
    productUnitId2?: number;
    /**
     * Re-invoice on project flag.
     */
    reInvoiceOnProject?: boolean;
}
export namespace IncomingOrderLineWrite {
    export type TaxTransactionTypeEnum = 'NONE' | 'NEW_HIRES' | 'IMPROVEMENTS' | 'PUBLIC_GRANTS_FOR_NEW_HIRES' | 'SALES_AND_OTHER_REALIZATIONS' | 'SALES_AND_OTHER_REALIZATIONS_RECOGNIZED_AS_INCOME_IN_YEAR' | 'RETURN_OF_GRANTS_FOR_INVESTMENTS_IN_DISTRICTS' | 'ADJUSTMENTS_RELATED_MVA' | 'UNKNOWN_TRANSACTION_TYPES' | 'YEARLY_WRITEOFFS' | 'NEGATIVE_BALANCE_RECOGNIZED_AS_INCOME' | 'ADJUSTMENT_FOR_OBViOUS_VALUE_ADJUSTMENT' | 'PROFIT_TRANSFERRED_TO_PROFIT_AND_LOSS_ACCOUNT' | 'LOSS_TRANSFERRED_TO_PROFIT_AND_LOSS_ACCOUNT' | 'TRANSFER_TO_FROM_NEGATIVE_BALANCE' | 'ACCOUNTING_VALUE_PROFIT_AND_LOSS' | 'ACCOUNTING_WRITE_UPS_AND_WRITE_DOWNS';
    export const TaxTransactionTypeEnum = {
        None: 'NONE' as TaxTransactionTypeEnum,
        NewHires: 'NEW_HIRES' as TaxTransactionTypeEnum,
        Improvements: 'IMPROVEMENTS' as TaxTransactionTypeEnum,
        PublicGrantsForNewHires: 'PUBLIC_GRANTS_FOR_NEW_HIRES' as TaxTransactionTypeEnum,
        SalesAndOtherRealizations: 'SALES_AND_OTHER_REALIZATIONS' as TaxTransactionTypeEnum,
        SalesAndOtherRealizationsRecognizedAsIncomeInYear: 'SALES_AND_OTHER_REALIZATIONS_RECOGNIZED_AS_INCOME_IN_YEAR' as TaxTransactionTypeEnum,
        ReturnOfGrantsForInvestmentsInDistricts: 'RETURN_OF_GRANTS_FOR_INVESTMENTS_IN_DISTRICTS' as TaxTransactionTypeEnum,
        AdjustmentsRelatedMva: 'ADJUSTMENTS_RELATED_MVA' as TaxTransactionTypeEnum,
        UnknownTransactionTypes: 'UNKNOWN_TRANSACTION_TYPES' as TaxTransactionTypeEnum,
        YearlyWriteoffs: 'YEARLY_WRITEOFFS' as TaxTransactionTypeEnum,
        NegativeBalanceRecognizedAsIncome: 'NEGATIVE_BALANCE_RECOGNIZED_AS_INCOME' as TaxTransactionTypeEnum,
        AdjustmentForObviOusValueAdjustment: 'ADJUSTMENT_FOR_OBViOUS_VALUE_ADJUSTMENT' as TaxTransactionTypeEnum,
        ProfitTransferredToProfitAndLossAccount: 'PROFIT_TRANSFERRED_TO_PROFIT_AND_LOSS_ACCOUNT' as TaxTransactionTypeEnum,
        LossTransferredToProfitAndLossAccount: 'LOSS_TRANSFERRED_TO_PROFIT_AND_LOSS_ACCOUNT' as TaxTransactionTypeEnum,
        TransferToFromNegativeBalance: 'TRANSFER_TO_FROM_NEGATIVE_BALANCE' as TaxTransactionTypeEnum,
        AccountingValueProfitAndLoss: 'ACCOUNTING_VALUE_PROFIT_AND_LOSS' as TaxTransactionTypeEnum,
        AccountingWriteUpsAndWriteDowns: 'ACCOUNTING_WRITE_UPS_AND_WRITE_DOWNS' as TaxTransactionTypeEnum
    };
}


