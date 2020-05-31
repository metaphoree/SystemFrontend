import { Component, OnInit } from '@angular/core';
import { IncomeVM } from 'src/Modules/primary/domainModels/income/IncomeVM';
import { IncomeTypeVM } from 'src/Modules/primary/domainModels/income-type/IncomeTypeVM';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { WrapperExpenseListVM } from 'src/Modules/primary/domainModels/expense/WrapperExpenseListVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';
import { ExpenseVM } from 'src/Modules/primary/domainModels/expense/ExpenseVM';
import { PageData } from 'src/Modules/primary/domainModels/PageData';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { UtilService } from 'src/Services/util-service/util.service';
import { SessionService } from 'src/Services/session-service/session.service';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DB_OPERATION, IncomeType } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { ExpenseTypeVM } from 'src/Modules/primary/domainModels/expense-type/ExpenseTypeVM';

@Component({
  selector: 'app-expense-mgmt',
  templateUrl: './expense-mgmt.component.html',
  styleUrls: ['./expense-mgmt.component.css']
})
export class ExpenseMgmtComponent implements OnInit {

  // VARIABLES
  columnList: any;
  wrapperItemList: WrapperExpenseListVM;
  getDataListVM: GetDataListVM;
  CurrentPageNo: number = 1;
  CurrentPageSize: number = 10;



  // 
  //selectedItem: ItemVM;
  //selectedItemCategory: ItemCategoryVM;
  //selectedItemStatus: ItemStatusVM;
  




  pageData: PageData;
  viewModel: ExpenseVM;
  constructor(private util: UtilService,
    private session: SessionService,
    private baseService: BaseServiceService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    this.pageData = new PageData();
    this.wrapperItemList = new WrapperExpenseListVM();
    this.getDataListVM = new GetDataListVM();

 
    // this.selectedSupplier = new SupplierVM();
    // this.selectedStaff = new StaffVM();
    // this.selectedCustomer = new CustomerVM();
    // this.selectedExpenseType = new ExpenseTypeVM();

    this.columnList = [
      { field: 'Action', header: 'Action', fieldType: 'icon' },
      { field: 'ExpenseTypeName', header: 'ExpenseTypeName', fieldType: 'string' },
      { field: 'ClientName', header: 'ClientName', fieldType: 'string' },
      { field: 'Month', header: 'Month', fieldType: 'string' },
      { field: 'Amount', header: 'Amount', fieldType: 'number' },
      { field: 'Description', header: 'Description', fieldType: 'string' },
      { field: 'Purpose', header: 'Purpose', fieldType: 'string' },
      { field: 'OccurranceDate', header: 'OccurranceDate', fieldType: 'date' }
    ];
  }

  ngOnInit(): void {
    this.viewModel = new ExpenseVM();
    this.util.initDD_Data.subscribe(
      (data: PageData) => {
        this.pageData = data;
        console.log(data);
      }
    );
    this.CurrentPageNo = 1;
    this.getDataListVM.PageNumber = this.CurrentPageNo;
    this.getDataListVM.PageSize = this.CurrentPageSize;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
  }



  // Add(event): void {

  //   // this.viewModel.FactoryId = this.session.getFactoryId();
  //   // this.viewModel.EmployeeId = this.session.getCurrentUserId();
  //   // this.viewModel.InvoiceTypeId = this.pageData.ddModelVmsNotPageSpecific
  //   //   .InvoiceTypeVMs.filter((val, i, arr) => {
  //   //     return val.value.Name == InvoiceType[InvoiceType.PurchaseReturn];
  //   //   })[0].value.Id;


  // }

  // EVENTS
  AddEvent(event): void {
    this.openModalAdd();
  }

  // MODAL FUNCTION
  openModalAdd() {
    const ref = this.dialogService.open(AddExpenseComponent, {
      data: {
        pageData: this.pageData,
        modelProvided : false
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((item: any) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.CREATE, item);
      }
    });
  }
  Refresh(event) : void {
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
        URL = ApiUrl.SetExpense;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetExpense;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateIncomeType + '/' + item.Id;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeleteExpense;
        break;
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperExpenseListVM>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.TotalRecords = data.TotalRecords;
        this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
        this.baseService.LoaderOff();
      }
      );
  }


  SearchEvent(event): void {
    this.CurrentPageNo = 1;
    this.getDataListVM.PageNumber = this.CurrentPageNo;
    this.getDataListVM.PageSize = this.CurrentPageSize;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
  }
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

  ModifyEvent(event, operationType, entity): void {
    console.log(operationType);
    console.log(entity);
    console.log(event);
    if (operationType == 'Edit') {
      // this.openModalUpdate(entity);
    }
    if (operationType == 'Delete') {
      this.confirm(entity);
    }
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
