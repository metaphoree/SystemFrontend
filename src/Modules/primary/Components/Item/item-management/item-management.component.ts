import { Component, OnInit } from '@angular/core';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { AddItemComponent } from '../add-item/add-item.component';
import { DialogService } from 'primeng/dynamicdialog/public_api';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { WrapperListCustomerVM } from 'src/Modules/primary/domainModels/WrapperListCustomerVM';
import { ApiUrl } from '../../../../../Services/RestUrls/api-url'
import { WrapperItemListVM } from 'src/Modules/primary/domainModels/item/WrapperItemListVM';
import { EditItemComponent } from '../edit-item/edit-item.component';
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
  itemList: ItemVM[];
  TotalRecords: number;

  constructor(private dialogService: DialogService,
    private baseService: BaseServiceService) {
    this.wrapperItemList = new WrapperItemListVM();
    this.itemList = [];
    this.TotalRecords = 0;
  }

  ngOnInit(): void {
    this.columnList = [
      { field: 'button', header: 'Edit' },
      { field: 'button', header: 'Delete' },
      { field: 'Name', header: 'Name' }
    ];
    this.categories = [
      { Name: 'Select City', Id: 'qqqqqqq' },
      { Name: 'New York', Id: 'qqqqqqq1' },
      { Name: 'Rome', Id: 'qqqqqqq12' },
      { Name: 'London', Id: 'qqqqqqq13' }, ,
      { Name: 'Istanbul', Id: 'qqqqqqq14' },
      { Name: 'Paris', Id: 'qqqqqqq15' }
    ];
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
      this.Delete(entity);
    }
  }
  Add(item: ItemVM): void {
    this.baseService.set<WrapperItemListVM>(ApiUrl.SetItem, item)
      .subscribe((data) => {
        this.itemList = data.ListOfData;
        this.TotalRecords = data.TotalRecoreds;
        console.log(data);
        console.log(this.itemList);
      });
  }
  Update(item: ItemVM): void {
    this.baseService.set<WrapperItemListVM>(ApiUrl.UpdateItem, item)
      .subscribe((data) => {
        this.itemList = data.ListOfData;
        this.TotalRecords = data.TotalRecoreds;
        console.log(data);
        console.log(this.itemList);
      });

  }
  Delete(item: ItemVM): void {
    this.baseService.set<WrapperItemListVM>(ApiUrl.DeleteItem, item)
      .subscribe((data) => {
        this.itemList = data.ListOfData;
        this.TotalRecords = data.TotalRecoreds;
        console.log(data);
        console.log(this.itemList);
      });

  }

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
        this.Add(item);
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
        this.Update(item);
      }
    });
  }
}
