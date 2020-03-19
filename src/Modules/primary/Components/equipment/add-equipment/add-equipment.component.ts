import { Component, OnInit } from '@angular/core';
import { EquipmentVM } from 'src/Modules/primary/domainModels/equipment/EquipmentVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DDModel } from 'src/Models/Utils/DDModel';
import { UtilService } from 'src/Services/util-service/util.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  viewModel : EquipmentVM;
  ddModel : DDModel[];
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private util : UtilService) { 
    this.viewModel = new EquipmentVM();
    this.ddModel = util.convertToDropdownModel(this.dynamicDialogConfig.data.equipmentCategoryList,['Name','Id'],'Select Category');
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }

}
