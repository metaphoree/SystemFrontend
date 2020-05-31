import { DDModel } from 'src/Models/Utils/DDModel';
import { DDModelVAOB } from './DDModelVAOB';
import { ExpenseTypeVM } from './expense-type/ExpenseTypeVM';
import { IncomeTypeVM } from './income-type/IncomeTypeVM';
import { InvoiceTypeVM } from './invoice-type/InvoiceTypeVM';

export class DDModelVMs {
    ItemVMs: DDModel[];
    ItemCategoryVMs: DDModel[];
    CustomerVMs: DDModel[];
    SupplierVMs: DDModel[];

    ExpenseTypeVMs: DDModel[];
    IncomeTypeVMs: DDModel[];
    InvoiceTypeVMs: DDModel[];
    FactoryVMs: DDModel[];
    constructor() {
        this.ItemCategoryVMs = [];
        this.ItemVMs = [];
        this.CustomerVMs = [];
        this.SupplierVMs = [];
        this.ExpenseTypeVMs = [];
        this.IncomeTypeVMs = [];
        this.InvoiceTypeVMs = [];
    }
}
export class DDModelVMs_ {
    ItemVMs: DDModelVAOB[];
    ItemCategoryVMs: DDModelVAOB[];
    CustomerVMs: DDModelVAOB[];
    SupplierVMs: DDModelVAOB[];
    ExpenseTypeVMs: DDModelVAOB[];
    IncomeTypeVMs: DDModelVAOB[];
    InvoiceTypeVMs: DDModelVAOB[];
    ItemStatusVMs: DDModelVAOB[];
    StaffVMs: DDModelVAOB[];
    EquipmentVMs: DDModelVAOB[];
    RoleVMs : DDModelVAOB[];
    FactoryVMs: DDModelVAOB[];
    constructor() {
        this.ItemCategoryVMs = [];
        this.ItemVMs = [];
        this.CustomerVMs = [];
        this.SupplierVMs = [];
        this.ExpenseTypeVMs = [];
        this.IncomeTypeVMs = [];
        this.InvoiceTypeVMs = [];
        this.ItemStatusVMs = [];
        this.StaffVMs = [];
        this.EquipmentVMs = [];
        this.RoleVMs = [];
        this.FactoryVMs = [];
    }
}