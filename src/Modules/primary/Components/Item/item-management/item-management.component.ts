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
import { MessageService } from 'primeng/api';
import { WrapperItemCategoryListVM } from 'src/Modules/primary/domainModels/ItemCategory/WrapperItemCategoryListVM';
@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html',
  styleUrls: ['./item-management.component.css'],
  providers: [DialogService]
})
export class ItemManagementComponent implements OnInit {

  columnList: any;
  categories: ItemCategoryVM[];
  selectedCategory: ItemCategoryVM;
  wrapperItemList: WrapperItemListVM;
  getDataListVM : GetDataListVM;
  constructor(private dialogService: DialogService,
    private baseService: BaseServiceService,
    private messageService : MessageService) {
    this.wrapperItemList = new WrapperItemListVM();
  }

  ngOnInit(): void {
    this.columnList = [
      { field: 'button', header: 'Edit' },
      { field: 'button', header: 'Delete' },
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

  GetInitialData() : void{
    this.getDataListVM = new GetDataListVM();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 100;

    this.baseService.set<WrapperItemCategoryListVM>(ApiUrl.GetItemCategory, this.getDataListVM)
      .subscribe((data) => {
        this.categories = data.ListOfData;
        console.log(this.categories);
      });
  } 
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
      this.DoDBOperation(DB_OPERATION.DELETE, entity);
    }
  }
  DoDBOperation(operationType: DB_OPERATION, item: any): void {
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
    this.baseService.set<WrapperItemListVM>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.TotalRecoreds = data.TotalRecoreds;
      });
  }

  // Update(item: ItemVM): void {
  //   this.baseService.set<WrapperItemListVM>(ApiUrl.UpdateItem, item)
  //     .subscribe((data) => {
  //       this.itemList = data.ListOfData;
  //       this.TotalRecords = data.TotalRecoreds;
  //       console.log(data);
  //       console.log(this.itemList);
  //     });
  // }
  // Delete(item: ItemVM): void {
  //   this.baseService.set<WrapperItemListVM>(ApiUrl.DeleteItem, item)
  //     .subscribe((data) => {
  //       this.itemList = data.ListOfData;
  //       this.TotalRecords = data.TotalRecoreds;
  //       console.log(data);
  //       console.log(this.itemList);
  //     });
  // }
  openModalAdd() {
    const ref = this.dialogService.open(AddItemComponent, {
      data: {
        categoriesData: this.categories
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((item: ItemVM) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.CREATE, item);
      }
    });
  }
  openModalUpdate(item: ItemVM) {
    const ref = this.dialogService.open(EditItemComponent, {
      data: {
        categoriesData: this.categories,
        modelData: item
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((item: ItemVM) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.UPDATE, item);
      }
    });
  }
}
