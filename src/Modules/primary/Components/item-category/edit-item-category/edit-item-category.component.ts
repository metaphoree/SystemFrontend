import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-item-category',
  templateUrl: './edit-item-category.component.html',
  styleUrls: ['./edit-item-category.component.css']
})
export class EditItemCategoryComponent implements OnInit {

  viewModel: ItemCategoryVM;
  message: string;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private baseService: BaseServiceService,
    private messageService: MessageService) {
    this.viewModel = this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }

  Edit(event): void {
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
