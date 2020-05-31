import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/Services/util-service/util.service';
import { PageData } from 'src/Modules/primary/domainModels/PageData';
import { Observable } from 'rxjs';
import { PurchaseReturnVM } from 'src/Modules/primary/domainModels/stock/PurchaseReturnVM';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { ItemStatusVM } from 'src/Modules/primary/domainModels/item-status/ItemStatusVM';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { SalesReturnComponent } from '../sales-return/sales-return.component';
import { SalesReturnVM } from 'src/Modules/primary/domainModels/stock/SalesReturnVM';
import { SessionService } from 'src/Services/session-service/session.service';
import { InvoiceType, DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { WrapperPurchaseReturnVM } from 'src/Modules/primary/domainModels/stock/WrapperPurchaseReturnVM';
import { DialogService } from 'primeng/dynamicdialog';
import { AddPurchaseReturnComponent } from '../add-purchase-return/add-purchase-return.component';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.css']
})
export class PurchaseReturnComponent implements OnInit {

  // VARIABLES
  columnList: any;
  wrapperItemList: WrapperPurchaseReturnVM;
  getDataListVM: GetDataListVM;
  CurrentPageNo: number = 1;
  CurrentPageSize: number = 10;



  // 
  selectedItem: ItemVM;
  selectedItemCategory: ItemCategoryVM;
  selectedItemStatus: ItemStatusVM;
  selectedSupplier: SupplierVM;

  pageData: PageData;
  viewModel: PurchaseReturnVM;
  constructor(private util: UtilService,
    private session: SessionService,
    private baseService: BaseServiceService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    this.pageData = new PageData();
    this.wrapperItemList = new WrapperPurchaseReturnVM();
    this.getDataListVM = new GetDataListVM();

    this.selectedItem = new ItemVM();
    this.selectedItemCategory = new ItemCategoryVM();
    this.selectedItemStatus = new ItemStatusVM();
    this.selectedSupplier = new SupplierVM();

    this.columnList = [
      { field: 'Action', header: 'Action', fieldType: 'icon' },
      { field: 'SupplierName', header: 'Supplier', fieldType: 'string' },
      { field: 'ItemName', header: 'Item', fieldType: 'string' },
      { field: 'ItemCategoryName', header: 'ItemCategory', fieldType: 'string' },
      { field: 'Quantity', header: 'Quantity', fieldType: 'number' },
      { field: 'UnitPrice', header: 'Rate', fieldType: 'number' },
      { field: 'AmountRecieved', header: 'Recieved', fieldType: 'number' },
      { field: 'AmountRecievable', header: 'Recievable', fieldType: 'number' },
      { field: 'TotalAmount', header: 'Total', fieldType: 'number' },
      { field: 'OccurranceDate', header: 'Occurrance', fieldType: 'date' }
    ];
  }

  ngOnInit(): void {
    this.viewModel = new PurchaseReturnVM();
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
    const ref = this.dialogService.open(AddPurchaseReturnComponent, {
      data: {
        pageData: this.pageData,
        modelProvided: false
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
  Refresh(event): void {
    this.CurrentPageNo = 1;
    this.getDataListVM.PageNumber = this.CurrentPageNo;
    this.getDataListVM.PageSize = this.CurrentPageSize;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);

  }
  // DB OPERATION FUNCTION
  DoDBOperation(operationType: DB_OPERATION, item: any): void {
    this.baseService.LoaderOn();
    let URL: string = '';
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetPurchaseReturn;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetPurchaseReturn;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateIncomeType + '/' + item.Id;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeletePurchaseReturn;
        break;
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperPurchaseReturnVM>(URL, item)
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
