import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InvoiceTypeVM } from 'src/Modules/primary/domainModels/invoice-type/InvoiceTypeVM';

@Component({
  selector: 'app-edit-invoice-type',
  templateUrl: './edit-invoice-type.component.html',
  styleUrls: ['./edit-invoice-type.component.css']
})
export class EditInvoiceTypeComponent implements OnInit {

  viewModel : InvoiceTypeVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }

  Edit(event) : void{
    this.dynamicDialogRef.close(this.viewModel);
  }

}
