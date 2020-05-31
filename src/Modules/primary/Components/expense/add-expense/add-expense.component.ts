import { Component, OnInit } from '@angular/core';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { ExpenseTypeVM } from 'src/Modules/primary/domainModels/expense-type/ExpenseTypeVM';
import { PageData } from 'src/Modules/primary/domainModels/PageData';
import { ExpenseVM } from 'src/Modules/primary/domainModels/expense/ExpenseVM';
import { UtilService } from 'src/Services/util-service/util.service';
import { SessionService } from 'src/Services/session-service/session.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InvoiceType } from 'src/AppUtils/AppConstant/app-constant';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {



  showSupplier: boolean;
  showStaff: boolean;
  showCustomer: boolean;

  selectedCustomer: CustomerVM;
  selectedStaff: StaffVM;
  selectedSupplier: SupplierVM;
  selectedExpenseType: ExpenseTypeVM;
  selectedClientType: any;
  pageData: PageData;
  viewModel: ExpenseVM;
  clientTypeList: any;
  message: string;
  clientTypeId: string;

  constructor(
    private util: UtilService,
    private session: SessionService,
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private baseService: BaseServiceService,
    private messageService: MessageService) {
    this.pageData = new PageData();
    this.selectedSupplier = new SupplierVM();
    this.selectedStaff = new StaffVM();
    this.selectedCustomer = new CustomerVM();
    this.selectedExpenseType = new ExpenseTypeVM();
    this.viewModel = new ExpenseVM();
    this.showCustomer = false;
    this.showStaff = false;
    this.showSupplier = false;
    this.clientTypeList = [];
    this.clientTypeList = this.util.getClientType();
    console.log(this.clientTypeList);
    this.pageData = this.dynamicDialogConfig.data.pageData;
  }
  ngOnInit(): void {

  }

  SupplierSelected(event): void {
    this.viewModel.ClientId = event.value.Id;
    this.viewModel.ClientName = event.value.Name;
    console.log(event.value);
    console.log(event);
  }
  CustomerSelected(event): void {
    this.viewModel.ClientId = event.value.CustomerId;
    this.viewModel.ClientName = event.value.Name;
    console.log(event.value);
    console.log(event);
  }
  StaffSelected(event): void {
    this.viewModel.ClientId = event.value.Id;
    this.viewModel.ClientName = event.value.Name;
    console.log(event.value);
    console.log(event);
  }
  ClientTypeSelected(event): void {
    this.clientTypeId = event.value;
    if (event.value == 'Customer') {
      this.showCustomer = true;
      this.showStaff = false;
      this.showSupplier = false;
    }
    else if (event.value == 'Supplier') {
      this.showCustomer = false;
      this.showStaff = false;
      this.showSupplier = true;
    }
    else if (event.value == 'Staff') {
      this.showCustomer = false;
      this.showStaff = true;
      this.showSupplier = false;
    }
    console.log(event.value);
    console.log(event);
  }
  ExpenseTypeSelected(event): void {
    this.viewModel.ExpenseTypeId = event.value.Id;
    this.viewModel.ExpenseTypeName = event.value.Name;
    console.log(event.value);
    console.log(event);
  }
  AmountChanged(event): void {
    //this.viewModel.ExpenseTypeId = event.value.Id;
    //this.viewModel.ExpenseTypeName = event.value.Name;
    console.log(event.value);
    console.log(event);
  }

  Add(event): void {

    this.viewModel.FactoryId = this.session.getFactoryId();
    this.viewModel.EmployeeId = this.session.getCurrentUserId();


    // this.viewModel.IncomeTypeId = this.pageData.initLoadDataVM
    //   .IncomeTypeVMs.filter((val, i, arr) => {
    //     return val.Name == IncomeType[IncomeType.PurchaseReturn];
    //   })[0].Id;

    console.log(InvoiceType[InvoiceType.Expense]);
    console.log(this.pageData.initLoadDataVM.InvoiceTypeVMs);

    this.viewModel.InvoiceTypeId = this.pageData.initLoadDataVM
      .InvoiceTypeVMs.filter((val, i, arr) => {
        return val.Name == InvoiceType[InvoiceType.Expense];
      })[0].Id;

    if (!this.IsValidExpenseVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.viewModel);

  }

  IsValidExpenseVM(vm: ExpenseVM): boolean {
    if (!this.baseService.isValidString(this.clientTypeId)) {
      this.message = " Client Type  ";
      return false;
    }
    if (!this.baseService.isValidString(vm.ClientId)) {
      this.message = " Client ";
      return false;
    }
    if (!this.baseService.isValidString(vm.Description)) {
      this.message = " Description ";
      return false;
    }
    if (!this.baseService.isValidString(vm.Purpose)) {
      this.message = " Purpose ";
      return false;
    }
    if (!this.baseService.isValidString(vm.ExpenseTypeId)) {
      this.message = " Expense Type ";
      return false;
    }
    return true;;
  }










}
