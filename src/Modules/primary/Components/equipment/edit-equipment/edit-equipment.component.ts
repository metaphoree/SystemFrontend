import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EquipmentVM } from 'src/Modules/primary/domainModels/equipment/EquipmentVM';
import { DDModel } from 'src/Models/Utils/DDModel';
import { UtilService } from 'src/Services/util-service/util.service';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent implements OnInit {

  viewModel : EquipmentVM;
  ddModel : DDModel[];
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private util : UtilService) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
    this.ddModel = util.convertToDropdownModel(this.dynamicDialogConfig.data.equipmentCategoryList,['Name','Id'],'Select Category');

  }

  ngOnInit(): void {
  }

  Edit(event) : void{
    this.dynamicDialogRef.close(this.viewModel);
  }


}
