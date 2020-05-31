import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  viewModel : SupplierVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel = new SupplierVM();
  }
  ngOnInit(): void {
  }
  AddCustomer(event) : void {
    if (!this.IsValidSupplierVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidSupplierVM(vm: SupplierVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = " Supplier Name ";
      return false;
    }
    return true;;
  }

}
