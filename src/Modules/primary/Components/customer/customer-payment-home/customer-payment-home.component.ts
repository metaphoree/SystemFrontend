import { Component, OnInit } from '@angular/core';
import { AddProductionVM } from 'src/Modules/primary/domainModels/production/AddProductionVM';
import { WrapperProductionListVM } from 'src/Modules/primary/domainModels/production/WrapperProductionListVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { InitialLoadDataVM } from 'src/Modules/primary/domainModels/InitLoadDataVM';
import { DDModelVMs_ } from 'src/Modules/primary/domainModels/DDModelVMs';
import { DialogService } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { UtilService } from 'src/Services/util-service/util.service';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { StaffProductionComponent } from '../../staff/staff-production/staff-production.component';
import { WrapperPaymentListVM } from 'src/Modules/primary/domainModels/payment/WrapperPaymentListVM';
import { GetPaymentDataListVM } from 'src/Modules/primary/domainModels/payment/GetPaymentDataListVM';
import { CustomerPaymentComponent } from '../customer-payment/customer-payment.component';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';

@Component({
  selector: 'app-customer-payment-home',
  templateUrl: './customer-payment-home.component.html',
  styleUrls: ['./customer-payment-home.component.css']
})
export class CustomerPaymentHomeComponent implements OnInit {

 // VARIABLES
 columnList: any;

 wrapperItemList: WrapperPaymentListVM;
 getDataListVM: GetPaymentDataListVM;
 CurrentPageNo: number = 1;
 CurrentPageSize: number = 10;

 // drop down init data
 // drop down data list carrier
 public initLoadDataVM: InitialLoadDataVM;
 public ddModelVms: DDModelVMs_;
 public ddModelVmsPageSpecific: DDModelVMs_;
public selectedCustomer : CustomerVM;


 // CONSTRUCTOR
 constructor(private dialogService: DialogService,
   private baseService: BaseServiceService,
   private messageService: MessageService,
   private confirmationService: ConfirmationService,
   private util: UtilService) {
   this.wrapperItemList =new WrapperPaymentListVM();
   this.getDataListVM = new GetPaymentDataListVM();

   this.ddModelVms = new DDModelVMs_();
   this.ddModelVmsPageSpecific = new DDModelVMs_();
   this.initLoadDataVM = new InitialLoadDataVM();
 }



 // INIT
 ngOnInit(): void {
   this.GetInitialData_DD();
   this.columnList = [
    { field: 'Action', header: 'Action',fieldType : 'icon' },
    { field: 'Amount', header: 'Cash Paid',fieldType : 'number' },
  //  { field: 'ClientName', header: 'Client Name',fieldType : 'string' },
    { field: 'PaymentDate', header: 'Payment Date' ,fieldType : 'date'}
  ];


 
   this.GetInitialData_DD();

 }

   // // GETTING LIST CATEGORIES FOR DROP DOWN
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

 // GETTING LIST CATEGORIES FOR DROP DOWN
 GetInitialData_DD(): void {
   this.getDataListVM.PageNumber = 1;
   this.getDataListVM.PageSize = 1000;
   this.baseService.LoaderOn();
   this.baseService.set<InitialLoadDataVM>(ApiUrl.GetProductionInitData, this.getDataListVM)
     .subscribe((data) => {
       console.log(data);
       this.initLoadDataVM.ItemCategoryVMs = data.ItemCategoryVMs;
       this.initLoadDataVM.ItemVMs = data.ItemVMs;
       this.initLoadDataVM.SupplierVMs = data.SupplierVMs;
       this.initLoadDataVM.ExpenseTypeVMs = data.ExpenseTypeVMs;
       this.initLoadDataVM.InvoiceTypeVMs = data.InvoiceTypeVMs;
       this.initLoadDataVM.IncomeTypeVMs = data.IncomeTypeVMs;
       this.initLoadDataVM.StaffVMs = data.StaffVMs;
       this.initLoadDataVM.CustomerVMs = data.CustomerVMs;
       this.initLoadDataVM.ItemStatusVMs = data.ItemStatusVMs;

       console.log(this.initLoadDataVM.InvoiceTypeVMs);

       // drop downs initializations
       this.ddModelVms.SupplierVMs =
         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.SupplierVMs, ['Name', 'Id'], 'Select Supplier');
       this.ddModelVmsPageSpecific.SupplierVMs = this.ddModelVms.SupplierVMs.slice();

       this.ddModelVms.ExpenseTypeVMs =
         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ExpenseTypeVMs, ['Name', 'Id'], 'Select Expense type');
       this.ddModelVmsPageSpecific.ExpenseTypeVMs = this.ddModelVms.ExpenseTypeVMs.slice();


       this.ddModelVms.InvoiceTypeVMs =
         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.InvoiceTypeVMs, ['Name', 'Id'], 'Select Invoice type');
       this.ddModelVmsPageSpecific.InvoiceTypeVMs = this.ddModelVms.InvoiceTypeVMs.slice();


       this.ddModelVms.CustomerVMs =
         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.CustomerVMs, ['Name', 'Id'], 'Select Customer');
       this.ddModelVmsPageSpecific.CustomerVMs = this.ddModelVms.CustomerVMs.slice();



       this.ddModelVms.IncomeTypeVMs =
         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.IncomeTypeVMs, ['Name', 'Id'], 'Select IncomeType');
       this.ddModelVmsPageSpecific.IncomeTypeVMs = this.ddModelVms.IncomeTypeVMs.slice();


       this.ddModelVms.StaffVMs =
         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.StaffVMs, ['Name', 'Id'], 'Select Staff');
       this.ddModelVmsPageSpecific.StaffVMs = this.ddModelVms.StaffVMs.slice();

       this.ddModelVms.ItemCategoryVMs =
         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemCategoryVMs, ['Name', 'Id'], 'Select Category');
       this.ddModelVmsPageSpecific.ItemCategoryVMs = this.ddModelVms.ItemCategoryVMs.slice();


       this.ddModelVms.ItemVMs =
         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemVMs, ['Name', 'Id'], 'Select Item');
       this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();

       this.ddModelVms.EquipmentVMs =
         this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.EquipmentVMs, ['Name', 'Id'], 'Select Equipment');
       this.ddModelVmsPageSpecific.EquipmentVMs = this.ddModelVms.EquipmentVMs.slice();

     
       this.ddModelVms.ItemStatusVMs =
       this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemStatusVMs, ['Name', 'Id'], 'Select Equipment');
     this.ddModelVmsPageSpecific.ItemStatusVMs = this.ddModelVms.ItemStatusVMs.slice();
     
     
     
       // this.purchaseVm.InvoiceType = this.initLoadDataVM.InvoiceTypeVMs.filter((value, index, arr) => { return value.Name == 'Purchase' })[0];
       // this.purchaseVm.EmployeeId = this.session.getCurrentUserId();
       // this.purchaseVm.ExpenseType = this.initLoadDataVM.ExpenseTypeVMs.filter((value, index, arr) => { return value.Name == 'Purchase' })[0];
       // this.purchaseVm.FactoryId = this.session.getFactoryId();      
       //console.log(this.purchaseVm.InvoiceType);
       console.log(this.ddModelVms);
       this.baseService.LoaderOff();
     });
 }

 
 SelectedCustomer(event) : void {
   this.getDataListVM.PageNumber = 1;
   this.getDataListVM.PageSize = 10;
   let customer : CustomerVM = event.value;
   console.log(event.value);
   this.getDataListVM.ClientId = customer.CustomerId;
   this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
 }
 
 
 
 // EVENTS
 AddEvent(event): void {
   this.openModalAdd();
 }
 ModifyEvent(event, operationType, entity): void {
   console.log(operationType);
   console.log(entity);
   console.log(event);
   // if (operationType == 'Edit') {
   //   this.openModalUpdate(entity);
   // }
   if (operationType == 'Delete') {
     this.confirm(entity);
   }
 }
 SearchEvent(event): void {
   this.CurrentPageNo = 1;
   this.getDataListVM.PageNumber = this.CurrentPageNo;
   this.getDataListVM.PageSize = this.CurrentPageSize;
   this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
 }

 // DB OPERATION FUNCTION
 DoDBOperation(operationType: DB_OPERATION, item: any): void {
   let URL: string = '';
   this.baseService.LoaderOn();
   switch (operationType) {
     case DB_OPERATION.CREATE:
       URL = ApiUrl.RecieveCashFromCustomer;
       break;
     case DB_OPERATION.READ:
       URL = ApiUrl.CustomerPaymentList;
       break;
     case DB_OPERATION.UPDATE:
       URL = ApiUrl.UpdateProduction + '/' + item.Id;
       break;
     case DB_OPERATION.DELETE:
       URL = ApiUrl.DeleteCustomerPayment;
       break;
     default:
       break;
   }
   console.log(URL);
   this.baseService.set<WrapperPaymentListVM>(URL, item)
     .subscribe((data) => {
       this.wrapperItemList.ListOfData = data.ListOfData;
       this.wrapperItemList.TotalRecords = data.TotalRecords;
       this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
       this.baseService.LoaderOff();
      }
     );
 }

 // MODAL FUNCTION
 openModalAdd() {
   const ref = this.dialogService.open(CustomerPaymentComponent, {
     data: {
       ddModel: this.ddModelVms,
       initLoadDataVM : this.initLoadDataVM
       // categoriesData: this.ddModelVms.ItemCategoryVMs,
       // itemsData : this.ddModelVms.ItemVMs,
       // equipmentData : this.ddModelVms.EquipmentVMs,
       // staffData : this.ddModelVms.StaffVMs
     },
     header: 'Give necessary  info',
     width: '70%',
     height: '90%',
     footer: "This is footer",
     dismissableMask: true
   });
   ref.onClose.subscribe((item: any) => {
     if (item) {
       this.DoDBOperation(DB_OPERATION.CREATE, item);


       // this.baseService.set<CommonResponse>(ApiUrl.RecieveCashFromCustomer, this.viewModel)
       // .subscribe((data) => {
       //   if (data.Success) {
       //     this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
       //   }
       //   else {
       //     this.messageService.add({ severity: 'failed', summary: 'Something Wrong', detail: 'Operation failed' });
       //   }
       // });
  
  
     }
   });
 }
 // openModalUpdate(item: any) {
 //   const ref = this.dialogService.open(EditItemComponent, {
 //     data: {
 //       modelData: item,
 //       categoriesData :  this.categories
 //     },
 //     header: 'Give necessary  info',
 //     width: '70%',
 //     height: '90%',
 //     footer: "This is footer"
 //   });
 //   ref.onClose.subscribe((item: any) => {
 //     if (item) {
 //       this.DoDBOperation(DB_OPERATION.UPDATE, item);
 //     }
 //   });
 // }


 // DELETION CONFIRMATION
 confirm(entity: any) {
   this.confirmationService.confirm({
     message: 'Are you sure that you want to perform this action?',
     accept: () => {
       //Actual logic to perform a confirmation
       this.DoDBOperation(DB_OPERATION.DELETE, entity);
     },
     reject: () => {


     }
   });
 }

 // PAGING FUNCTION
 GoToPage(op: any): void {
   switch (op) {
     case '+':
       this.CurrentPageNo++;
       // this.getDataListVM = new GetDataListVM();
       this.getDataListVM.PageNumber = this.CurrentPageNo;
       this.getDataListVM.PageSize = this.CurrentPageSize;
       this.getDataListVM.ClientId = this.selectedCustomer.CustomerId;
       this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
       break;
     case '-':
       if (this.CurrentPageNo > 1) {
         this.CurrentPageNo--
         // this.getDataListVM = new GetDataListVM();
         this.getDataListVM.PageNumber = this.CurrentPageNo;
         this.getDataListVM.PageSize = this.CurrentPageSize;
         this.getDataListVM.ClientId = this.selectedCustomer.CustomerId;
         this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
       }
       break;
   }
 }

 // RESET DATA TABLE
 Reset(): void {
   this.CurrentPageNo = 1;
   this.getDataListVM.GlobalFilter = "";
   this.getDataListVM.PageNumber = this.CurrentPageNo;
   this.getDataListVM.PageSize = this.CurrentPageSize;
   this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
 }

}
