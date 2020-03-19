import { Component, OnInit } from '@angular/core';
import { EquipmentCategoryVM } from 'src/Modules/primary/domainModels/equipment-category/EquipmentCategoryVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-equipment-category',
  templateUrl: './add-equipment-category.component.html',
  styleUrls: ['./add-equipment-category.component.css']
})
export class AddEquipmentCategoryComponent implements OnInit {

  viewModel : EquipmentCategoryVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new EquipmentCategoryVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }

}
