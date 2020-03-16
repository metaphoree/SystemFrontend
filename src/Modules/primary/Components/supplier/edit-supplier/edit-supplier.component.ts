import { Component, OnInit } from '@angular/core';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  model : SupplierVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.model = this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }
  EditCustomer(event) : void {
    this.dynamicDialogRef.close(this.model);
  }

}
