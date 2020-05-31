import { Component, OnInit } from '@angular/core';
import { EquipmentCategoryVM } from 'src/Modules/primary/domainModels/equipment-category/EquipmentCategoryVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-equipment-category',
  templateUrl: './add-equipment-category.component.html',
  styleUrls: ['./add-equipment-category.component.css']
})
export class AddEquipmentCategoryComponent implements OnInit {

  viewModel : EquipmentCategoryVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel = new EquipmentCategoryVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    if (!this.IsValidEquipmentCategoryVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidEquipmentCategoryVM(vm: EquipmentCategoryVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = " Name ";
      return false;
    }
    return true;;
  }
}
