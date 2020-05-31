import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UtilService } from 'src/Services/util-service/util.service';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

   viewModel: StockVM;
   AddedQuantity: number = 0;
   RemovedQuantity: number = 0;
   message : string;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private util: UtilService,
    private baseService : BaseServiceService,
    private messageService : MessageService) {
    this.viewModel = this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }
  Edit(event): void {
    this.viewModel.Quantity = this.viewModel.Quantity == null ||  isNaN(this.viewModel.Quantity) ? 0 :this.viewModel.Quantity;
    this.viewModel.Quantity = parseInt(this.viewModel.Quantity.toString())  + parseInt(this.AddedQuantity.toString()) - parseInt(this.RemovedQuantity.toString());
    // if (!this.IsValidStockVM(this.viewModel)) {
    //   this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
    //   return;
    // }
    this.dynamicDialogRef.close(this.viewModel);
  }
  // IsValidStockVM(vm: StockVM): boolean {
  //   if (!this.baseService.isValidString(vm.ItemId)) {
  //     this.message = "  Item  ";
  //     return false;
  //   }
  //   if (!this.baseService.isValidString(vm.ItemStatusId)) {
  //     this.message = " Item Status ";
  //     return false;
  //   }
  //   return true;;
  // }
}
