import { Component, OnInit } from '@angular/core';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DDModel } from 'src/Models/Utils/DDModel';
import { UtilService } from 'src/Services/util-service/util.service';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

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
message : string;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private util: UtilService,
    private baseService : BaseServiceService,
    private messageService : MessageService) {
    this.viewModel = new StockVM();
    this.ddModelItem = util.convertToDropdownModel(this.dynamicDialogConfig.data.ItemList, ['Name', 'Id'], "Select Item");
    this.ddModelItemStatus = util.convertToDropdownModel(this.dynamicDialogConfig.data.ItemStatusList, ['Name', 'Id'], "Select Item Status");
  }
  ngOnInit(): void {

  }
  Add(event): void {
    this.viewModel.ExpiryDate = this.util.getUTCDateTime(this.viewModel.ExpiryDate);
    console.log(this.viewModel.ExpiryDate);
    if (!this.IsValidStockVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }

    this.dynamicDialogRef.close(this.viewModel);
  }


  IsValidStockVM(vm: StockVM): boolean {
    if (!this.baseService.isValidString(vm.ItemId)) {
      this.message = "  Item  ";
      return false;
    }
    if (!this.baseService.isValidString(vm.ItemStatusId)) {
      this.message = " Item Status ";
      return false;
    }
    return true;;
  }


}
