import { Component, OnInit } from '@angular/core';
import { InvoiceTypeVM } from 'src/Modules/primary/domainModels/invoice-type/InvoiceTypeVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-invoice-type',
  templateUrl: './add-invoice-type.component.html',
  styleUrls: ['./add-invoice-type.component.css']
})
export class AddInvoiceTypeComponent implements OnInit {

  viewModel : InvoiceTypeVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new InvoiceTypeVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }
}
