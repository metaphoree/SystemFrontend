import { Component, OnInit } from '@angular/core';
import { AddCustomerViewModel } from '../../domainModels/AddCustomerViewModel';
import { CustomerServiceService } from 'src/Services/customer-service/customer-service.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent implements OnInit {

  viewModel: AddCustomerViewModel;
  listVM: Array<AddCustomerViewModel>;
  constructor(private customerService: CustomerServiceService) {
    this.viewModel = new AddCustomerViewModel('', '', '', '', '', '', '');
    //this.listVM = new Array<AddCustomerViewModel>(1000);
  }

  ngOnInit(): void {
    this.GetAllCustomer();
  }

  AddCustomer(event): void {
    this.customerService.setCustomer(this.viewModel).
      subscribe((data: any) => {       
        this.GetAllCustomer();
       // console.log(this.listVM);
      });

  }
  GetAllCustomer(): void {
    // session management 
    this.customerService.getAllCustomer('f')
      .subscribe((data) => {
        this.listVM = data;
        console.log(data);
        console.log(this.listVM);
        
      });
  }
}
