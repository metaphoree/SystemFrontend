import { Component, OnInit } from '@angular/core';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { UtilService } from 'src/Services/util-service/util.service';
import { DDModel } from 'src/Models/Utils/DDModel';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  viewModel : ItemVM;
  categories : ItemCategoryVM[];
  selectedItem : string;
  ddModel : DDModel[];
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private util : UtilService ) { 
    this.viewModel = new ItemVM();
    this.categories = this.dynamicDialogConfig.data.categoriesData;
    this.ddModel = util.convertToDropdownModel(this.categories,['Name','Id'],'Select Item Category');
    console.log("Nice to see");
    console.log(this.ddModel);
    
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    console.log('this.selectedItem');console.log(this.selectedItem);
    this.viewModel.CategoryId = this.selectedItem;
    this.dynamicDialogRef.close(this.viewModel);
  }
}
