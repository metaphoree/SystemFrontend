import { Component, OnInit } from '@angular/core';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { SessionService } from 'src/Services/session-service/session.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.css']
})
export class SalesDetailsComponent implements OnInit {

  viewModel: ItemVM[];
  childColumnList : any;
  constructor(private session: SessionService,
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig) {

    this.viewModel = [];
    this.viewModel = this.dynamicDialogConfig.data.model;
    this.childColumnList = [
      { field: 'Action', header: 'Action', fieldType: 'icon' },
      { field: 'ItemName', header: 'ItemName', fieldType: 'string' },
      { field: 'ItemCategoryName', header: 'ItemCategoryName', fieldType: 'string' },
      { field: 'Status', header: 'Status', fieldType: 'string' },
      { field: 'Quantity', header: 'Quantity', fieldType: 'number' },
      { field: 'UnitPrice', header: 'UnitPrice', fieldType: 'number' },
      { field: 'Month', header: 'Month', fieldType: 'string' }
    ];
  }

  ngOnInit(): void {
  }


  Add(event): void {
    this.dynamicDialogRef.close(this.viewModel);
  }



}
