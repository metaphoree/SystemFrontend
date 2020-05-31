import { Component, OnInit } from '@angular/core';
import { PaymentStatusVM } from 'src/Modules/primary/domainModels/payment-status/PaymentStatusVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { SessionService } from 'src/Services/session-service/session.service';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-payment-status',
  templateUrl: './add-payment-status.component.html',
  styleUrls: ['./add-payment-status.component.css']
})
export class AddPaymentStatusComponent implements OnInit {

  viewModel : PaymentStatusVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private session : SessionService,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel = new PaymentStatusVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    this.viewModel.FactoryId = this.session.getFactoryId();
    if (!this.IsValidPaymentStatusVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidPaymentStatusVM(vm: PaymentStatusVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = " Name ";
      return false;
    }
    return true;;
  }

}
