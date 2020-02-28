import { Component, OnInit } from '@angular/core';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  viewModel : ItemVM;
  categories : ItemCategoryVM[];
  selectedItem : ItemCategoryVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.categories = this.dynamicDialogConfig.data.categoriesData;
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
    this.selectedItem = this.categories.find(x => x.Id == this.viewModel.CategoryId);
  }

  ngOnInit(): void {
  }

  Edit() : void{
    this.viewModel.CategoryId = this.selectedItem.Id;
    this.dynamicDialogRef.close(this.viewModel);
  }

}
