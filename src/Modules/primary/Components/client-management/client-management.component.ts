import { Component, OnInit } from '@angular/core';
import { AddCustomerViewModel } from '../../domainModels/AddCustomerViewModel';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent implements OnInit {

  viewModel: AddCustomerViewModel;
  constructor() { }

  ngOnInit(): void {
  }

}
