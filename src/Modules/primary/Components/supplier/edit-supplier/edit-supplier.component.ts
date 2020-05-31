import { Component, OnInit } from '@angular/core';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  model : SupplierVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.model = this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }
  EditCustomer(event) : void {
    if (!this.IsValidSupplierVM(this.model)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.model);
  }
  IsValidSupplierVM(vm: SupplierVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = " Supplier Name ";
      return false;
    }
    return true;;
  }
}
