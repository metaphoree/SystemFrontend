import { Component, OnInit } from '@angular/core';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { UtilService } from 'src/Services/util-service/util.service';
import { DDModel } from 'src/Models/Utils/DDModel';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  viewModel: ItemVM;
  categories: ItemCategoryVM[];
  selectedItem: string;
  ddModel: DDModel[];
  message: string;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private util: UtilService,
    private baseService: BaseServiceService,
    private messageService: MessageService) {
    this.viewModel = new ItemVM();
    this.categories = this.dynamicDialogConfig.data.categoriesData;
    this.ddModel = util.convertToDropdownModel(this.categories, ['Name', 'Id'], 'Select Item Category');
    console.log("Nice to see");
    console.log(this.ddModel);

  }
  ngOnInit(): void {

  }
  Add(event): void {
    console.log('this.selectedItem'); console.log(this.selectedItem);
    this.viewModel.CategoryId = this.selectedItem;
    console.log(this.viewModel);
    if (!this.IsValidItemVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }

    this.dynamicDialogRef.close(this.viewModel);
  }

  IsValidItemVM(vm: ItemVM): boolean {
    if (!this.baseService.isValidString(vm.CategoryId)) {
      this.message = " Category ";
      return false;
    }
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = " Item Name ";
      return false;
    }
    return true;;
  }
}
