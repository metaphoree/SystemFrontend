import { Component, OnInit } from '@angular/core';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { AddItemComponent } from '../add-item/add-item.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { WrapperListCustomerVM } from 'src/Modules/primary/domainModels/WrapperListCustomerVM';
import { ApiUrl } from '../../../../../Services/RestUrls/api-url'
import { WrapperItemListVM } from 'src/Modules/primary/domainModels/item/WrapperItemListVM';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { MessageService, ConfirmationService } from 'primeng/api';
import { WrapperItemCategoryListVM } from 'src/Modules/primary/domainModels/ItemCategory/WrapperItemCategoryListVM';
@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html',
  styleUrls: ['./item-management.component.css']
})
export class ItemManagementComponent implements OnInit {

    // VARIABLES
  columnList: any;
  categories: ItemCategoryVM[];
  selectedCategory: ItemCategoryVM;
  wrapperItemList: WrapperItemListVM;
  getDataListVM : GetDataListVM;
  CurrentPageNo: number = 1;
  CurrentPageSize: number = 10;


  // CONSTRUCTOR
  constructor(private dialogService: DialogService,
    private baseService: BaseServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    this.wrapperItemList = new WrapperItemListVM();
    this.getDataListVM = new GetDataListVM();
  }
   // INIT
  ngOnInit(): void {
    this.columnList = [
      { field: 'Action', header: 'Action' },
      { field: 'CategoryName', header: 'Name' },
      { field: 'Name', header: 'Name' }
    ];
    this.categories = [];
    this.getDataListVM = new GetDataListVM();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 10;
    this.DoDBOperation(DB_OPERATION.READ,this.getDataListVM);
    this.GetInitialData();
  }

  // GETTING LIST CATEGORIES FOR DROP DOWN
  GetInitialData() : void{
    this.baseService.LoaderOn();
    this.getDataListVM = new GetDataListVM();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 100;

    this.baseService.set<WrapperItemCategoryListVM>(ApiUrl.GetItemCategory, this.getDataListVM)
      .subscribe((data) => {
        this.categories = data.ListOfData;
        console.log(this.categories);
       this.baseService.LoaderOff();
      });
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
    this.baseService.LoaderOn();
    let URL: string = '';
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetItem;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetItem;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateItem + '/' + item.Id;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeleteItem;
        break;
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperItemListVM>(URL, item)
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
    const ref = this.dialogService.open(AddItemComponent, {
      data: {
        categoriesData :  this.categories
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
  openModalUpdate(item: any) {
    const ref = this.dialogService.open(EditItemComponent, {
      data: {
        modelData: item,
        categoriesData :  this.categories
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
