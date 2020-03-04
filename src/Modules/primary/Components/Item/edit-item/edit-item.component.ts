import { Component, OnInit } from '@angular/core';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DDModel } from 'src/Models/Utils/DDModel';
import { UtilService } from 'src/Services/util-service/util.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  viewModel : ItemVM;
  categories : ItemCategoryVM[];
  selectedItem : string;
  ddModel : DDModel[];
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private util : UtilService) { 
    this.categories = this.dynamicDialogConfig.data.categoriesData;
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
    this.selectedItem = this.viewModel.CategoryId;
    this.ddModel = util.convertToDropdownModel(this.categories,['Name','Id'],'Select Item Category');
  }

  ngOnInit(): void {
  }

  Edit(event) : void{
    this.viewModel.CategoryId = this.selectedItem;
    this.dynamicDialogRef.close(this.viewModel);
  }

}
