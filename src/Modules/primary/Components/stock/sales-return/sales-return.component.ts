import { Component, OnInit } from '@angular/core';
import { PageData } from 'src/Modules/primary/domainModels/PageData';
import { UtilService } from 'src/Services/util-service/util.service';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { ItemStatusVM } from 'src/Modules/primary/domainModels/item-status/ItemStatusVM';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { SalesReturnVM } from 'src/Modules/primary/domainModels/stock/SalesReturnVM';
import { WrapperSalesReturnVM } from 'src/Modules/primary/domainModels/stock/WrapperSalesReturnVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { SessionService } from 'src/Services/session-service/session.service';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { AddSalesReturnComponent } from '../add-sales-return/add-sales-return.component';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.css']
})
export class SalesReturnComponent implements OnInit {

  // VARIABLES
  columnList: any;
  wrapperItemList: WrapperSalesReturnVM;
  getDataListVM: GetDataListVM;
  CurrentPageNo: number = 1;
  CurrentPageSize: number = 10;


  selectedItem: ItemVM;
  selectedItemCategory: ItemCategoryVM;
  selectedItemStatus: ItemStatusVM;
  selectedCustomer: CustomerVM;


  viewModel: SalesReturnVM;
  pageData: PageData;


  constructor(private util: UtilService,
    private session: SessionService,
    private baseService: BaseServiceService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    this.pageData = new PageData();
    this.wrapperItemList = new WrapperSalesReturnVM();
    this.getDataListVM = new GetDataListVM();

    this.selectedItem = new ItemVM();
    this.selectedItemCategory = new ItemCategoryVM();
    this.selectedItemStatus = new ItemStatusVM();
    this.selectedCustomer = new CustomerVM();

    this.columnList = [
      { field: 'Action', header: 'Action', fieldType: 'icon' },
      { field: 'CustomerName', header: 'Customer', fieldType: 'string' },
      { field: 'ItemName', header: 'Item', fieldType: 'string' },
      { field: 'ItemCategoryName', header: 'ItemCategory', fieldType: 'string' },
      { field: 'Quantity', header: 'Quantity', fieldType: 'number' },
      { field: 'UnitPrice', header: 'Rate', fieldType: 'number' },
      { field: 'AmountPaid', header: 'Paid', fieldType: 'number' },
      { field: 'AmountPayable', header: 'Payable', fieldType: 'number' },
      { field: 'TotalAmount', header: 'Total', fieldType: 'number' },
      { field: 'OccurranceDate', header: 'Occurrance', fieldType: 'date' }
    ];
  }

  ngOnInit(): void {
    this.viewModel = new SalesReturnVM();
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
  // EVENTS
  AddEvent(event): void {
    this.openModalAdd();
  }

  // MODAL FUNCTION
  openModalAdd() {
    const ref = this.dialogService.open(AddSalesReturnComponent, {
      data: {
        pageData: this.pageData
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

  // DB OPERATION FUNCTION
  DoDBOperation(operationType: DB_OPERATION, item: any): void {
    this.baseService.LoaderOn();
    let URL: string = '';
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetSalesReturn;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetSalesReturn;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateIncomeType + '/' + item.Id;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeleteSalesReturn;
        break;
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperSalesReturnVM>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.TotalRecords = data.TotalRecords;
        this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
        this.baseService.LoaderOff();
      }
      );
  }


  Refresh(event): void {
    this.CurrentPageNo = 1;
    this.getDataListVM.PageNumber = this.CurrentPageNo;
    this.getDataListVM.PageSize = this.CurrentPageSize;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);

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

  // CustomerSelected(event): void {
  //   this.viewModel.CustomerId = event.value.Id;
  //   // this.viewModel.SupplierVM = event.value;
  //   console.log(event.value);
  //   console.log(event);
  // }
  // ItemSelected(event): void {
  //   this.viewModel.ItemId = event.value.Id;
  //   //this.purchaseVm.SupplierVM = event.value;
  //   console.log(event.value);
  //   console.log(event);
  // }
  // ItemCategorySelected(event): void {
  //   this.viewModel.ItemCategoryId = event.value.Id;
  //   //this.purchaseVm.SupplierVM = event.value;
  //   console.log(event.value);
  //   console.log(event);
  // }
  // ItemStatusSelected(event): void {
  //   this.viewModel.ItemStatusId = event.value.Id;
  //   // this.purchaseVm.SupplierVM = event.value;
  //   console.log(event.value);
  //   console.log(event);
  // }

  // Add(event): void {


  // }


}
