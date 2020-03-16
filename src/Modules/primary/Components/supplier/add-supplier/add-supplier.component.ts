import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  viewModel : SupplierVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new SupplierVM();
  }
  ngOnInit(): void {
  }
  AddCustomer(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }

}
