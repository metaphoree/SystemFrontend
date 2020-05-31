import { Component, OnInit } from '@angular/core';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-item-category',
  templateUrl: './add-item-category.component.html',
  styleUrls: ['./add-item-category.component.css']
})
export class AddItemCategoryComponent implements OnInit {

  viewModel : ItemCategoryVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel = new ItemCategoryVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {

    if (!this.IsValidItemCategoryVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.viewModel);
  }


  IsValidItemCategoryVM(vm: ItemCategoryVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = " Category Name ";
      return false;
    }
    return true;;
  }



}
