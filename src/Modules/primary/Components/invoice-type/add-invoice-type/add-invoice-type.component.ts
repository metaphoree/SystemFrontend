import { Component, OnInit } from '@angular/core';
import { InvoiceTypeVM } from 'src/Modules/primary/domainModels/invoice-type/InvoiceTypeVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-invoice-type',
  templateUrl: './add-invoice-type.component.html',
  styleUrls: ['./add-invoice-type.component.css']
})
export class AddInvoiceTypeComponent implements OnInit {

  viewModel: InvoiceTypeVM;
  message: string;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private baseService: BaseServiceService,
    private messageService: MessageService) {
    this.viewModel = new InvoiceTypeVM();
  }
  ngOnInit(): void {

  }
  Add(event): void {
    if (!this.IsValidInvoiceTypeVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }

    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidInvoiceTypeVM(vm: InvoiceTypeVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = "  Name ";
      return false;
    }
    return true;;
  }
}
