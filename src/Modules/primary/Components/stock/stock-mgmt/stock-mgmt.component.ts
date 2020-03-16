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



  // CONSTRUCTOR
  constructor(private dialogService: DialogService,
    private baseService: BaseServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    this.wrapperItemList = new WrapperStockListVM();
    this.getDataListVM = new GetDataListVM();
  }
  // INIT
  ngOnInit(): void {
    this.getInitialData();
    this.columnList = [
      { field: 'Action', header: 'Action',fieldType : 'icon' },
      { field: 'ItemName', header: 'Item Name',fieldType : 'string' },
      { field: 'ItemStatus', header: 'Item Status' ,fieldType : 'string'},
      { field: 'Quantity', header: 'Quantity',fieldType : 'number' },
      { field: 'ExpiryDate', header: 'Expiry Date',fieldType : 'date' }
    ];
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
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperStockListVM>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.TotalRecoreds = data.TotalRecoreds;
        this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
      }
      );
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



















}
