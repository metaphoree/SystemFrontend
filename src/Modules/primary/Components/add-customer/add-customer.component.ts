import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AddCustomerViewModel } from '../../domainModels/AddCustomerViewModel';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  viewModel : AddCustomerViewModel;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new AddCustomerViewModel('','','','','','','');
  }
  ngOnInit(): void {
  }
  AddCustomer(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }
}
