import { Component, OnInit } from '@angular/core';
import { PaymentVM } from 'src/Modules/primary/domainModels/payment/PaymentVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { InitialLoadDataVM } from 'src/Modules/primary/domainModels/InitLoadDataVM';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { DDModelVMs_ } from 'src/Modules/primary/domainModels/DDModelVMs';
import { UtilService } from 'src/Services/util-service/util.service';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { SessionService } from 'src/Services/session-service/session.service';
import { InvoiceType, IncomeType } from 'src/AppUtils/AppConstant/app-constant';
import { CommonResponse } from 'src/Modules/primary/domainModels/CommonResponse';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css']
})
export class CustomerPaymentComponent implements OnInit {


  public viewModel: PaymentVM;
  public getDataListVM: GetDataListVM;
  public initLoadDataVM: InitialLoadDataVM;
  public ddModelVms: DDModelVMs_;
  public ddModelVmsPageSpecific: DDModelVMs_;
  public selectedCustomer: CustomerVM;
  public message : string;
  constructor(private baseService: BaseServiceService,
    private util: UtilService,
    private session: SessionService,
    private messageService : MessageService,
    private dynamicDialogConfig : DynamicDialogConfig,
    private dynamicDialogRef : DynamicDialogRef) {
    this.viewModel = new PaymentVM();
    this.getDataListVM = new GetDataListVM();
    this.initLoadDataVM = new InitialLoadDataVM();
    this.ddModelVms = new DDModelVMs_();
    this.ddModelVmsPageSpecific = new DDModelVMs_();
    this.selectedCustomer = new CustomerVM();



    this.ddModelVms = this.dynamicDialogConfig.data.ddModel;
    this.initLoadDataVM = this.dynamicDialogConfig.data.initLoadDataVM;
    
    this.ddModelVmsPageSpecific.CustomerVMs = this.ddModelVms.CustomerVMs.slice();
    this.ddModelVmsPageSpecific.EquipmentVMs = this.ddModelVms.EquipmentVMs.slice();
    this.ddModelVmsPageSpecific.SupplierVMs = this.ddModelVms.SupplierVMs.slice();
    this.ddModelVmsPageSpecific.InvoiceTypeVMs = this.ddModelVms.InvoiceTypeVMs.slice();
    this.ddModelVmsPageSpecific.ExpenseTypeVMs = this.ddModelVms.ExpenseTypeVMs.slice();
    this.ddModelVmsPageSpecific.IncomeTypeVMs = this.ddModelVms.IncomeTypeVMs.slice();
    this.ddModelVmsPageSpecific.ItemStatusVMs = this.ddModelVms.ItemStatusVMs.slice();
    this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();
    this.ddModelVmsPageSpecific.ItemCategoryVMs = this.ddModelVms.ItemCategoryVMs.slice();
    this.ddModelVmsPageSpecific.StaffVMs = this.ddModelVms.StaffVMs.slice();


  }

  ngOnInit(): void {
    //this.GetInitialData();
  }
  // GETTING LIST CATEGORIES FOR DROP DOWN
  // GetInitialData(): void {
  //   this.getDataListVM.PageNumber = 1;
  //   this.getDataListVM.PageSize = 1000;

  //   this.baseService.set<InitialLoadDataVM>(ApiUrl.PaymentInitialData, this.getDataListVM)
  //     .subscribe((data) => {
  //       console.log(data);
  //       this.initLoadDataVM.SupplierVMs = data.SupplierVMs;
  //       this.initLoadDataVM.ExpenseTypeVMs = data.ExpenseTypeVMs;
  //       this.initLoadDataVM.InvoiceTypeVMs = data.InvoiceTypeVMs;
  //       this.initLoadDataVM.IncomeTypeVMs = data.IncomeTypeVMs;
  //       this.initLoadDataVM.StaffVMs = data.StaffVMs;
  //       this.initLoadDataVM.CustomerVMs = data.CustomerVMs;


  //       console.log(this.initLoadDataVM.InvoiceTypeVMs);

  //       // drop downs initializations
  //       this.ddModelVms.SupplierVMs =
  //         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.SupplierVMs, ['Name', 'Id'], 'Select Supplier');
  //       this.ddModelVmsPageSpecific.SupplierVMs = this.ddModelVms.SupplierVMs.slice();

  //       this.ddModelVms.ExpenseTypeVMs =
  //         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ExpenseTypeVMs, ['Name', 'Id'], 'Select Expense type');
  //       this.ddModelVmsPageSpecific.ExpenseTypeVMs = this.ddModelVms.ExpenseTypeVMs.slice();


  //       this.ddModelVms.InvoiceTypeVMs =
  //         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.InvoiceTypeVMs, ['Name', 'Id'], 'Select Invoice type');
  //       this.ddModelVmsPageSpecific.InvoiceTypeVMs = this.ddModelVms.InvoiceTypeVMs.slice();


  //       this.ddModelVms.CustomerVMs =
  //         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.CustomerVMs, ['Name', 'Id'], 'Select Customer');
  //       this.ddModelVmsPageSpecific.CustomerVMs = this.ddModelVms.CustomerVMs.slice();



  //       this.ddModelVms.IncomeTypeVMs =
  //         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.IncomeTypeVMs, ['Name', 'Id'], 'Select IncomeType');
  //       this.ddModelVmsPageSpecific.IncomeTypeVMs = this.ddModelVms.IncomeTypeVMs.slice();


  //       this.ddModelVms.StaffVMs =
  //         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.StaffVMs, ['Name', 'Id'], 'Select Staff');
  //       this.ddModelVmsPageSpecific.StaffVMs = this.ddModelVms.StaffVMs.slice();

  //       // this.ddModelVms.ItemCategoryVMs =
  //       //   this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemCategoryVMs, ['Name', 'Id'], 'Select Category');
  //       // this.ddModelVmsPageSpecific.ItemCategoryVMs = this.ddModelVms.ItemCategoryVMs.slice();


  //       // this.ddModelVms.ItemVMs =
  //       //   this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemVMs, ['Name', 'Id'], 'Select Item');
  //       // this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();
  //       // this.purchaseVm.InvoiceType = this.initLoadDataVM.InvoiceTypeVMs.filter((value, index, arr) => { return value.Name == 'Purchase' })[0];
  //       // this.purchaseVm.EmployeeId = this.session.getCurrentUserId();
  //       // this.purchaseVm.ExpenseType = this.initLoadDataVM.ExpenseTypeVMs.filter((value, index, arr) => { return value.Name == 'Purchase' })[0];
  //       // this.purchaseVm.FactoryId = this.session.getFactoryId();      
  //       //console.log(this.purchaseVm.InvoiceType);
  //       console.log(this.ddModelVms);
  //     });
  // }
  Selected(event): void {
    let cust = event.value;
    this.viewModel.ClientId = cust.CustomerId;
    this.viewModel.ClientName = cust.Name;
    console.log(event.value);
    console.log(event);
  }

  Add(event): void {
    this.viewModel.EmployeeId = this.session.getCurrentUserId();
    this.viewModel.FactoryId = this.session.getFactoryId();

    console.log(InvoiceType[InvoiceType.ClientPayment]);


    this.viewModel.InvoiceTypeId = this.initLoadDataVM.InvoiceTypeVMs.filter((val, index, arr) => {
      return arr[index].Name == InvoiceType[InvoiceType.ClientPayment];
    })[0].Id;
    this.viewModel.TypeId = this.initLoadDataVM.IncomeTypeVMs.filter((val, index, arr) => {
      return arr[index].Name == IncomeType[IncomeType.ClientPaymentRecieved];
    })[0].Id;




    // this.dynamicDialogRef.close(this.viewModel);
    if(this.IsValidPaymentVM(this.viewModel)){
      this.dynamicDialogRef.close(this.viewModel);
    }
    else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
    }
  
  
  }
  IsValidPaymentVM(vm: PaymentVM): boolean {
    if (this.baseService.isValidString(vm.ClientId)) {
      return true;
    }
    this.message = " Client Name ";
    return false;
  }
}
