import { Component, OnInit } from '@angular/core';
import { EquipmentVM } from 'src/Modules/primary/domainModels/equipment/EquipmentVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DDModel } from 'src/Models/Utils/DDModel';
import { UtilService } from 'src/Services/util-service/util.service';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  viewModel : EquipmentVM;
  ddModel : DDModel[];
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private util : UtilService,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel = new EquipmentVM();
    this.ddModel = util.convertToDropdownModel(this.dynamicDialogConfig.data.equipmentCategoryList,['Name','Id'],'Select Category');
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
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
    return true;
  }


}
