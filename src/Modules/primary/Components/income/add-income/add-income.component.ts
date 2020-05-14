import { Component, OnInit } from '@angular/core';
import { InvoiceType } from 'src/AppUtils/AppConstant/app-constant';
import { IncomeVM } from 'src/Modules/primary/domainModels/income/IncomeVM';
import { IncomeTypeVM } from 'src/Modules/primary/domainModels/income-type/IncomeTypeVM';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { PageData } from 'src/Modules/primary/domainModels/PageData';
import { UtilService } from 'src/Services/util-service/util.service';
import { SessionService } from 'src/Services/session-service/session.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {

  showSupplier: boolean;
  showStaff: boolean;
  showCustomer: boolean;

  selectedCustomer: CustomerVM;
  selectedStaff: StaffVM;
  selectedSupplier: SupplierVM;
  selectedIncomeType: IncomeTypeVM;
  selectedClientType: any;
  pageData: PageData;
  viewModel: IncomeVM;
  clientTypeList: any;


  constructor(
    private util: UtilService,
    private session: SessionService,
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig) {
      this.pageData = new PageData();
      this.selectedSupplier = new SupplierVM();
      this.selectedStaff = new StaffVM();
      this.selectedCustomer = new CustomerVM();
      this.selectedIncomeType = new IncomeTypeVM();
      this.viewModel = new IncomeVM();
      this.showCustomer = false;
      this.showStaff = false;
      this.showSupplier = false;
    this.clientTypeList = this.util.getClientType();
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
    this.viewModel.ClientId = event.value.Id;
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
    if (event.val == 'Customer') {
      this.showCustomer = true;
      this.showStaff = false;
      this.showSupplier = false;
    }
    else if (event.val == 'Supplier') {
      this.showCustomer = false;
      this.showStaff = false;
      this.showSupplier = true;
    }
    else if (event.val == 'Staff') {
      this.showCustomer = false;
      this.showStaff = true;
      this.showSupplier = false;
    }
    console.log(event.value);
    console.log(event);
  }
  IncomeTypeSelected(event): void {
    this.viewModel.IncomeTypeId = event.value.Id;
    this.viewModel.IncomeTypeName = event.value.Name;
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

    console.log(InvoiceType[InvoiceType.Income]);
    console.log(this.pageData.initLoadDataVM.InvoiceTypeVMs);

    this.viewModel.InvoiceTypeId = this.pageData.initLoadDataVM
      .InvoiceTypeVMs.filter((val, i, arr) => {
        return val.Name == InvoiceType[InvoiceType.Income];
      })[0].Id;


    this.dynamicDialogRef.close(this.viewModel);

  }




}
