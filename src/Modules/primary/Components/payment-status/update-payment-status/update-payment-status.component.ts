import { Component, OnInit } from '@angular/core';
import { PaymentStatusVM } from 'src/Modules/primary/domainModels/payment-status/PaymentStatusVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-payment-status',
  templateUrl: './update-payment-status.component.html',
  styleUrls: ['./update-payment-status.component.css']
})
export class UpdatePaymentStatusComponent implements OnInit {
  message : string;
  viewModel : PaymentStatusVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }

  Edit(event) : void{
    if (!this.IsValidPaymentStatusVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }

    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidPaymentStatusVM(vm: PaymentStatusVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = "  Name ";
      return false;
    }
    return true;;
  }

}
