import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  viewModel: CustomerVM;
  message: string;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private baseService: BaseServiceService,
    private messageService: MessageService) {
    this.viewModel = new CustomerVM();
  }
  ngOnInit(): void {
  }
  AddCustomer(event): void {
    if (!this.IsValidCustomerVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.viewModel);
  }

  IsValidCustomerVM(vm: CustomerVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = " Customer ";
      return false;
    }
    return true;;
  }








}
