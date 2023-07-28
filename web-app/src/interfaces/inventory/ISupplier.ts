import { IPage } from "../ICommon";

export interface ISupplierArchive {
    id: string;
    title: string;
    responsiblePerson: string;
    gender: string;
    contactNumber: string;
    address: string;
    remarks: string;
    webUrl: string;
    createDateTime: string;
}

export interface ISupplierArchives extends IPage {
    archives: Array<ISupplierArchive>;
}

export interface ISupplierContract {
    id: string;
    title: string;
    totalPrice: number;
    attachment: string;
}

export interface ISupplierContracts extends IPage {
    contracts: Array<ISupplierContract>;
}

export interface ISupplierEvaluation extends ISupplierArchive {
    evaluationScore: number;
}

export interface ISupplierEvaluations extends IPage {
    evaluations: Array<ISupplierEvaluation>;
}

export interface ISupplierEvaluationRecord {
    id: string;
    notes: string;
    score: number;
}

export interface ISupplierEvaluationRecords extends IPage {
    averageScore: number;
    evaluationRecords: Array<ISupplierEvaluationRecord>;
}

export interface ISupplierPayment extends ISupplierArchive {
    contractTotalPrice: number;
    paidTotalPrice: number;
}

export interface ISupplierPayments extends IPage {
    payments: Array<ISupplierPayment>;
}

export interface ISupplierPaymentRecord {
    id: string;
    paidAmount: number;
    notes: string;
    attachment: string;
}

export interface ISupplierPaymentRecords extends IPage {
    contractTotalPrice: number;
    paidTotalPrice: number;
    paymentRecords: Array<ISupplierPaymentRecord>;
}
