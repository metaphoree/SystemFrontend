import { Component, OnInit } from '@angular/core';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { DialogService } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { EditStockComponent } from '../edit-stock/edit-stock.component';
import { AddStockComponent } from '../add-stock/add-stock.component';
import { WrapperStockListVM } from 'src/Modules/primary/domainModels/stock/WrapperStockListVM';
import { ItemStatusVM } from 'src/Modules/primary/domainModels/item-status/ItemStatusVM';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { WrapperItemListVM } from 'src/Modules/primary/domainModels/item/WrapperItemListVM';
import { WrapperItemStatusListVM } from 'src/Modules/primary/domainModels/item-status/WrapperItemStatusListVM';
import { Router } from '@angular/router';
import { PageData } from 'src/Modules/primary/domainModels/PageData';
import { UtilService } from 'src/Services/util-service/util.service';
import { ItemStatusChangeComponent } from '../item-status-change/item-status-change.component';
import { AddPurchaseReturnComponent } from '../add-purchase-return/add-purchase-return.component';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';
import { PurchaseReturnVM } from 'src/Modules/primary/domainModels/stock/PurchaseReturnVM';

@Component({
  selector: 'app-stock-mgmt',
  templateUrl: './stock-mgmt.component.html',
  styleUrls: ['./stock-mgmt.component.css']
})
export class StockMgmtComponent implements OnInit {

  // VARIABLES
  columnList: any;
  wrapperItemList: WrapperStockListVM;
  getDataListVM: GetDataListVM;
  CurrentPageNo: number = 1;
  CurrentPageSize: number = 10;

  // initial data holder
  itemStatusList: ItemStatusVM[];
  itemList: ItemVM[];
  pageData: PageData;

  // CONSTRUCTOR
  constructor(
    private dialogService: DialogService,
    private baseService: BaseServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private util: UtilService
  ) {
    this.wrapperItemList = new WrapperStockListVM();
    this.getDataListVM = new GetDataListVM();
    this.pageData = new PageData();
  }
  // INIT
  ngOnInit(): void {
    //this.getInitialData();
    this.columnList = [
      { field: 'Action', header: 'Action', fieldType: 'icon' },
      { field: 'ItemName', header: 'Item Name', fieldType: 'string' },
      { field: 'ItemStatus', header: 'Item Status', fieldType: 'string' },
      { field: 'Quantity', header: 'Quantity', fieldType: 'number' }
      // { field: 'ExpiryDate', header: 'Expiry Date', fieldType: 'date' }
    ];
    this.baseService.LoaderOn();
    this.util.initDD_Data.subscribe(
      (data: PageData) => {
        this.pageData = data;
        console.log(data);
        this.itemList = this.pageData.initLoadDataVM.ItemVMs;
        this.itemStatusList = this.pageData.initLoadDataVM.ItemStatusVMs;
      }
    );
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 10;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
  }

  getInitialData(): void {
    let temp = new GetDataListVM();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 1000;
    this.baseService.set<WrapperItemListVM>(ApiUrl.GetItem, this.getDataListVM)
      .subscribe((data) => {
        this.itemList = data.ListOfData;
      }
      );

    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 1000;
    this.baseService.set<WrapperItemStatusListVM>(ApiUrl.GetItemStatus, this.getDataListVM)
      .subscribe((data) => {
        this.itemStatusList = data.ListOfData;
      }
      );
  }
  // EVENTS
  AddEvent(event): void {
    this.openModalAdd();
  }
  ModifyEvent(event, operationType, entity): void {
    console.log(operationType);
    console.log(entity);
    console.log(event);
    if (operationType == 'Edit') {
      this.openModalUpdate(entity);
    }
    if (operationType == 'Delete') {
      this.confirm(entity);
    }
    if (operationType == 'ChangeStatus') {
      this.openModalItemStatusChange(entity);
    }
    if (operationType == 'Return') {
      this.openModalPurchasereturnAdd(entity);
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
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetStock;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetStock;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateStock + '/' + item.Id;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeleteStock;
        break;
      case DB_OPERATION.OTHER:
        URL = ApiUrl.ChangeItemStatus;
        break;
      case DB_OPERATION.PURCHASE_RETURN:
        URL = ApiUrl.SetPurchaseReturn;
        break;
      default:
        break;
    }
    console.log(URL);

    if (operationType == DB_OPERATION.PURCHASE_RETURN) {
      this.baseService.set<WrapperStockListVM>(URL, item)
        .subscribe((data) => {

          this.CurrentPageNo = 1;
          this.getDataListVM.PageNumber = this.CurrentPageNo;
          this.getDataListVM.PageSize = this.CurrentPageSize;
          this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
          this.baseService.LoaderOff();
        }
        );
    }
    else {

      this.baseService.set<WrapperStockListVM>(URL, item)
        .subscribe((data) => {
          this.wrapperItemList.ListOfData = data.ListOfData;
          this.wrapperItemList.TotalRecords = data.TotalRecords;
          this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
          this.baseService.LoaderOff();
        }
        );
    }
  }

  // MODAL FUNCTION
  openModalAdd() {
    const ref = this.dialogService.open(AddStockComponent, {
      data: {
        ItemStatusList: this.itemStatusList,
        ItemList: this.itemList
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((item: any) => {
      if (item) {
        console.log("Stock Item to be added");
        console.log(item);
        this.DoDBOperation(DB_OPERATION.CREATE, item);

      }
    });
  }
  openModalUpdate(item: any) {
    const ref = this.dialogService.open(EditStockComponent, {
      data: {
        modelData: item
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((item: any) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.UPDATE, item);
      }
    });
  }
  openModalItemStatusChange(item: any) {
    const ref = this.dialogService.open(ItemStatusChangeComponent, {
      data: {
        modelData: item,
        pageData: this.pageData
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((item: any) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.OTHER, item);
      }
    });
  }



  // MODAL FUNCTION
  openModalPurchasereturnAdd(val: StockVM) {
    console.log(val);
    let viewModelTemp: PurchaseReturnVM;
    viewModelTemp = new PurchaseReturnVM();
    viewModelTemp.ItemId = val.ItemId;
    viewModelTemp.ItemStatusId = val.ItemStatusId;
    viewModelTemp.Quantity = val.Quantity;


    const ref = this.dialogService.open(AddPurchaseReturnComponent, {
      data: {
        pageData: this.pageData,
        modelProvided: true,
        viewModel: viewModelTemp
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((item: any) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.PURCHASE_RETURN, item);
      }
    });
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

  // RESET DATA TABLE
  Reset(): void {
    this.CurrentPageNo = 1;
    this.getDataListVM.GlobalFilter = "";
    this.getDataListVM.PageNumber = this.CurrentPageNo;
    this.getDataListVM.PageSize = this.CurrentPageSize;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);

  }



  goto(event, option): void {
    if (option == 'PurchaseReturn') {
      this.router.navigateByUrl('home/stock-mgmt-home/purchaseReturn')
    }
    else if (option == 'SalesReturn') {
      this.router.navigateByUrl('home/stock-mgmt-home/salesReturn');
    }

  }















}
