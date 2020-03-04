import { Component, OnInit } from '@angular/core';
import { WrapperItemCategoryListVM } from 'src/Modules/primary/domainModels/ItemCategory/WrapperItemCategoryListVM';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { DialogService } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { AddItemCategoryComponent } from '../add-item-category/add-item-category.component';
import { EditItemCategoryComponent } from '../edit-item-category/edit-item-category.component';
import { MessageService } from 'primeng/api';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';

@Component({
  selector: 'app-item-category-management',
  templateUrl: './item-category-management.component.html',
  styleUrls: ['./item-category-management.component.css'],
  providers : [DialogService]
})
export class ItemCategoryManagementComponent implements OnInit {

  columnList: any;
  wrapperItemList: WrapperItemCategoryListVM;
  getDataListVM : GetDataListVM;
  constructor(private dialogService: DialogService,
    private baseService: BaseServiceService,
    private messageService : MessageService) {
    this.wrapperItemList = new WrapperItemCategoryListVM();
  }

  ngOnInit(): void {
    this.columnList = [
      { field: 'button', header: 'Edit' },
      { field: 'button', header: 'Delete' },
      { field: 'Name', header: 'Name' }
    ];

    this.getDataListVM = new GetDataListVM();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 10;
    this.DoDBOperation(DB_OPERATION.READ,this.getDataListVM);
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
      this.DoDBOperation(DB_OPERATION.DELETE,entity);
    }
  }
  DoDBOperation(operationType: DB_OPERATION, item: any): void {
    let URL: string = '';
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetItemCategory;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetItemCategory;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateItemCategory + '/' + item.Id;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeleteItemCategory;
        break;
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperItemCategoryListVM>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.TotalRecoreds = data.TotalRecoreds;
      });
  }
  openModalAdd() {
    const ref = this.dialogService.open(AddItemCategoryComponent, {
      data: {
       
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((item: any) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.CREATE,item);
      }
    });
  }
  openModalUpdate(item: any) {
    const ref = this.dialogService.open(EditItemCategoryComponent, {
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
        this.DoDBOperation(DB_OPERATION.UPDATE,item);
      }
    });
  }
}
