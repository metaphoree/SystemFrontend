import { Component, OnInit } from '@angular/core';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';
import { PaymentVM } from 'src/Modules/primary/domainModels/payment/PaymentVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { InitialLoadDataVM } from 'src/Modules/primary/domainModels/InitLoadDataVM';
import { DDModelVMs_ } from 'src/Modules/primary/domainModels/DDModelVMs';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { UtilService } from 'src/Services/util-service/util.service';
import { SessionService } from 'src/Services/session-service/session.service';
import { MessageService } from 'primeng/api';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { InvoiceType, ExpenseType } from 'src/AppUtils/AppConstant/app-constant';
import { CommonResponse } from 'src/Modules/primary/domainModels/CommonResponse';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-staff-payment',
  templateUrl: './staff-payment.component.html',
  styleUrls: ['./staff-payment.component.css']
})
export class StaffPaymentComponent implements OnInit {

  public viewModel: PaymentVM;
  public getDataListVM: GetDataListVM;
  public initLoadDataVM: InitialLoadDataVM;
  public ddModelVms: DDModelVMs_;
  public ddModelVmsPageSpecific: DDModelVMs_;
  public selectedStaff: StaffVM;

  constructor(private baseService: BaseServiceService,
    private util: UtilService,
    private session: SessionService,
    private messageService : MessageService,
    private dynamicDialogRef : DynamicDialogRef,
    private dynamicDialogConfig : DynamicDialogConfig) {
  
    this.viewModel = new PaymentVM();
    this.getDataListVM = new GetDataListVM();
    this.initLoadDataVM = new InitialLoadDataVM();
    this.ddModelVms = new DDModelVMs_();
    this.ddModelVmsPageSpecific = new DDModelVMs_();
    this.selectedStaff = new StaffVM();
  
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
  }

  Selected(event): void {
    let cust = event.value;
    this.selectedStaff = cust;
    this.viewModel.ClientId = cust.Id;
    console.log(event.value);
    console.log(event);
  }

  Add(event): void {
    this.viewModel.EmployeeId = this.session.getCurrentUserId();
    this.viewModel.FactoryId = this.session.getFactoryId();

    console.log(InvoiceType[InvoiceType.ClientPayment]);


    this.viewModel.InvoiceTypeId = this.initLoadDataVM.InvoiceTypeVMs.filter((val, index, arr) => {
      return arr[index].Name == InvoiceType[InvoiceType.StaffPayment];
    })[0].Id;
    this.viewModel.TypeId = this.initLoadDataVM.ExpenseTypeVMs.filter((val, index, arr) => {
      return arr[index].Name == ExpenseType[ExpenseType.StaffPayment];
    })[0].Id;

    this.dynamicDialogRef.close(this.viewModel);
    // this.baseService.set<CommonResponse>(ApiUrl.GiveStaffPayment, this.viewModel)
    //   .subscribe((data) => {
    //     if (data.Success) {
    //       this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
    
    //     }
    //     else {
    //       this.messageService.add({ severity: 'failed', summary: 'Something Wrong', detail: 'Operation failed' });
    //     }
    //   });
  }
}
