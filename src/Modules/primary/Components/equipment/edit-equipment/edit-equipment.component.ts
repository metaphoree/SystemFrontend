import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EquipmentVM } from 'src/Modules/primary/domainModels/equipment/EquipmentVM';
import { DDModel } from 'src/Models/Utils/DDModel';
import { UtilService } from 'src/Services/util-service/util.service';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent implements OnInit {
  message : string;
  viewModel : EquipmentVM;
  ddModel : DDModel[];
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private util : UtilService,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
    this.ddModel = util.convertToDropdownModel(this.dynamicDialogConfig.data.equipmentCategoryList,['Name','Id'],'Select Category');

  }

  ngOnInit(): void {
  }

  Edit(event) : void{
    if (!this.IsValidEquipmentVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidEquipmentVM(vm: EquipmentVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = "  Name ";
      return false;
    }
    if (!this.baseService.isValidString(vm.EquipmentCategoryId)) {
      this.message = " Equipment Category ";
      return false;
    }
    return true;;
  }

}
