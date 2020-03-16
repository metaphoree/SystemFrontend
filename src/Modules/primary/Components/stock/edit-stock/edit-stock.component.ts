import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UtilService } from 'src/Services/util-service/util.service';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

   viewModel: StockVM;
   AddedQuantity: number = 0;
   RemovedQuantity: number = 0;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private util: UtilService) {
    this.viewModel = this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }
  Edit(event): void {
    this.viewModel.Quantity = this.viewModel.Quantity == null ||  isNaN(this.viewModel.Quantity) ? 0 :this.viewModel.Quantity;
    this.viewModel.Quantity = parseInt(this.viewModel.Quantity.toString())  + parseInt(this.AddedQuantity.toString()) - parseInt(this.RemovedQuantity.toString());
    this.dynamicDialogRef.close(this.viewModel);
  }
}
