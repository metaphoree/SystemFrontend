import { Component, OnInit } from '@angular/core';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  viewModel : ItemVM;
  categories : ItemCategoryVM[];
  selectedItem : ItemCategoryVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new ItemVM();
    this.categories = [];
    this.categories = this.dynamicDialogConfig.data.categoriesData;
    this.selectedItem = new ItemCategoryVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    this.viewModel.CategoryId = this.selectedItem.Id;
    this.dynamicDialogRef.close(this.viewModel);
  }
}
