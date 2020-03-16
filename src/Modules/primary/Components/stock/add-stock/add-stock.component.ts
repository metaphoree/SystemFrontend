import { Component, OnInit } from '@angular/core';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DDModel } from 'src/Models/Utils/DDModel';
import { UtilService } from 'src/Services/util-service/util.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  viewModel: StockVM;
  ddModelItemStatus: DDModel[];
  ddModelItem: DDModel[];
 dateValue : any;

  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private util: UtilService) {
    this.viewModel = new StockVM();
    this.ddModelItem = util.convertToDropdownModel(this.dynamicDialogConfig.data.ItemList, ['Name', 'Id'], "Select Item");
    this.ddModelItemStatus = util.convertToDropdownModel(this.dynamicDialogConfig.data.ItemStatusList, ['Name', 'Id'], "Select Item Status");
  }
  ngOnInit(): void {

  }
  Add(event): void {
    this.viewModel.ExpiryDate = this.util.getUTCDateTime(this.viewModel.ExpiryDate);
    console.log(this.viewModel.ExpiryDate);
    this.dynamicDialogRef.close(this.viewModel);
  }

}
