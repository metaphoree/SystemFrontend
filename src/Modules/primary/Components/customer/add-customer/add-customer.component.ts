import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  viewModel : CustomerVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new CustomerVM();
  }
  ngOnInit(): void {
  }
  AddCustomer(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }
}
