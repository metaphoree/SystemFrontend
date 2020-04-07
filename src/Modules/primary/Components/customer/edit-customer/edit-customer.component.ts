import { Component, OnInit, Input } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

   model : CustomerVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 

    // this.model = new AddCustomerViewModel('','','','','','','');
    this.model = this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }
  EditCustomer(event) : void {
    this.dynamicDialogRef.close(this.model);
  }
}
