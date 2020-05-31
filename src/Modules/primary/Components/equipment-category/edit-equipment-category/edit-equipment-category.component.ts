import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EquipmentCategoryVM } from 'src/Modules/primary/domainModels/equipment-category/EquipmentCategoryVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-equipment-category',
  templateUrl: './edit-equipment-category.component.html',
  styleUrls: ['./edit-equipment-category.component.css']
})
export class EditEquipmentCategoryComponent implements OnInit {

  viewModel : EquipmentCategoryVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }

  Edit(event) : void{
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
