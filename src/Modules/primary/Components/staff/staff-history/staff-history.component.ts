import { Component, OnInit } from '@angular/core';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { InitialLoadDataVM } from 'src/Modules/primary/domainModels/InitLoadDataVM';
import { DDModelVMs_ } from 'src/Modules/primary/domainModels/DDModelVMs';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';
import { UtilService } from 'src/Services/util-service/util.service';
import { GetDataListHistory } from 'src/Modules/primary/domainModels/history/GetDataListHistory';
import { WrapperStaffHistory } from 'src/Modules/primary/domainModels/history/staff/WrapperStaffHistory';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';

@Component({
  selector: 'app-staff-history',
  templateUrl: './staff-history.component.html',
  styleUrls: ['./staff-history.component.css']
})
export class StaffHistoryComponent implements OnInit {

  public getDataListVM: GetDataListHistory;
  public wrapperItemList: WrapperStaffHistory;
  public CurrentPageNo: number = 1;
  public CurrentPageSize: number = 10;

  // drop down init data
  // drop down data list carrier
  public initLoadDataVM: InitialLoadDataVM;
  public ddModelVms: DDModelVMs_;
  public ddModelVmsPageSpecific: DDModelVMs_;
  public selectedCustomer: StaffVM;
  columnList: any;
  constructor(private baseService: BaseServiceService,
    private messageService: MessageService,
    private util: UtilService) {

    this.columnList = [
      // { field: 'Action', header: 'Action', fieldType: 'icon' },
      { field: 'ItemName', header: 'ItemName', fieldType: 'string' },
      { field: 'CategoryName', header: 'CategoryName', fieldType: 'string' },
      { field: 'UnitPrice', header: 'UnitPrice', fieldType: 'number' },
      { field: 'Quantity', header: 'Quantity', fieldType: 'number' },
      { field: 'PaidAmount', header: 'PaidAmount', fieldType: 'number' },
      { field: 'RecievedAmount', header: 'RecievedAmount', fieldType: 'number' },
      { field: 'PayableAmount', header: 'PayableAmount', fieldType: 'number' },
      { field: 'RecievableAmount', header: 'RecievableAmount', fieldType: 'number' },
      { field: 'OccurranceDate', header: 'OccurranceDate', fieldType: 'date' },
    ];
    this.getDataListVM = new GetDataListHistory();
    this.wrapperItemList = new WrapperStaffHistory();
    this.selectedCustomer = new StaffVM();
    this.ddModelVms = new DDModelVMs_();
    this.ddModelVmsPageSpecific = new DDModelVMs_();
    this.initLoadDataVM = new InitialLoadDataVM();
  }

  ngOnInit(): void {
    this.GetInitialData();
    this.GetInitialData_DD();
  }




  // GETTING LIST CATEGORIES FOR DROP DOWN
  GetInitialData(): void {
    this.getDataListVM = new GetDataListHistory();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 100;

    this.baseService.set<WrapperStaffHistory>(ApiUrl.GetCustomerHistory, this.getDataListVM)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        // this.wrapperItemList.TotalRecoreds = data.TotalRecoreds;
        console.log(this.wrapperItemList.ListOfData);
        this.baseService.LoaderOff();
      });
  }


  // GETTING LIST CATEGORIES FOR DROP DOWN
  GetInitialData_DD(): void {
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 1000;

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
        console.log(this.ddModelVmsPageSpecific.CustomerVMs);



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

  // ModifyEvent(event, operationType, entity): void {
  //   console.log(operationType);
  //   console.log(entity);
  //   console.log(event);
  //   // if (operationType == 'Edit') {
  //   //   this.openModalUpdate(entity);
  //   // }
  //   if (operationType == 'Delete') {
  //     this.confirm(entity);
  //   }
  // }
  // // DELETION CONFIRMATION
  // confirm(entity: any) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to perform this action?',
  //     accept: () => {
  //       //Actual logic to perform a confirmation
  //       this.DoDBOperation(DB_OPERATION.DELETE, entity);
  //     },
  //     reject: () => {


  //     }
  //   });
  // }

  SelectedCustomer(event): void {
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 100;
    let customer: StaffVM = event.value;
    console.log(event.value);
    this.getDataListVM.ClientId = customer.Id;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
  }

  // DB OPERATION FUNCTION
  DoDBOperation(operationType: DB_OPERATION, item: any): void {
    let URL: string = '';
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetCustomer;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetStaffHistory;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateCustomer + '/' + item.CustomerId;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeleteCustomer;
        break;
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperStaffHistory>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        //  this.wrapperItemList.TotalRecoreds = data.TotalRecoreds;
        console.log(this.wrapperItemList);
        this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
        this.baseService.LoaderOff();
      }
      );
  }




  // PAGING FUNCTION
  GoToPage(op: any): void {
    switch (op) {
      case '+':
        this.CurrentPageNo++;
        // this.getDataListVM = new GetDataListVM();
        this.getDataListVM.PageNumber = this.CurrentPageNo;
        this.getDataListVM.PageSize = this.CurrentPageSize;
        this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
        break;
      case '-':
        if (this.CurrentPageNo > 1) {
          this.CurrentPageNo--
          // this.getDataListVM = new GetDataListVM();
          this.getDataListVM.PageNumber = this.CurrentPageNo;
          this.getDataListVM.PageSize = this.CurrentPageSize;
          this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
        }
        break;
    }
  }
}
