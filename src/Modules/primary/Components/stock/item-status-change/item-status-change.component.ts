import { Component, OnInit } from '@angular/core';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UtilService } from 'src/Services/util-service/util.service';
import { PageData } from 'src/Modules/primary/domainModels/PageData';
import { ItemStatusVM } from 'src/Modules/primary/domainModels/item-status/ItemStatusVM';

@Component({
  selector: 'app-item-status-change',
  templateUrl: './item-status-change.component.html',
  styleUrls: ['./item-status-change.component.css']
})
export class ItemStatusChangeComponent implements OnInit {

  viewModel: StockVM;
  selectedItemStatus: ItemStatusVM;
  AddedQuantity: number = 0;
  RemovedQuantity: number = 0;
  pageData: PageData;
  Quantity : number;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private util: UtilService) {
    this.viewModel = this.dynamicDialogConfig.data.modelData;
    this.pageData = this.dynamicDialogConfig.data.pageData;
    this.selectedItemStatus = new ItemStatusVM();
    this.Quantity = this.viewModel.Quantity;
  }

  ngOnInit(): void {
  }
  Edit(event): void {
    this.viewModel.Quantity = this.viewModel.Quantity == null || isNaN(this.viewModel.Quantity) ? 0 : this.viewModel.Quantity;
    // this.viewModel.Quantity = parseInt(this.viewModel.Quantity.toString())  + parseInt(this.AddedQuantity.toString()) - parseInt(this.RemovedQuantity.toString());
    this.dynamicDialogRef.close(this.viewModel);
  }
  ItemStatusSelected(event): void {
    this.viewModel.ItemStatusId = event.value.Id;
  }
}
