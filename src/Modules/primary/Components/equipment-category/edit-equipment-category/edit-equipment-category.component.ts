import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EquipmentCategoryVM } from 'src/Modules/primary/domainModels/equipment-category/EquipmentCategoryVM';

@Component({
  selector: 'app-edit-equipment-category',
  templateUrl: './edit-equipment-category.component.html',
  styleUrls: ['./edit-equipment-category.component.css']
})
export class EditEquipmentCategoryComponent implements OnInit {

  viewModel : EquipmentCategoryVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }

  Edit(event) : void{
    this.dynamicDialogRef.close(this.viewModel);
  }

}
