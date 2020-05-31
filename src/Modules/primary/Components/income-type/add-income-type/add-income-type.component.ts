import { Component, OnInit } from '@angular/core';
import { IncomeTypeVM } from 'src/Modules/primary/domainModels/income-type/IncomeTypeVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';

@Component({
  selector: 'app-add-income-type',
  templateUrl: './add-income-type.component.html',
  styleUrls: ['./add-income-type.component.css']
})
export class AddIncomeTypeComponent implements OnInit {

  viewModel : IncomeTypeVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel = new IncomeTypeVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    if (!this.IsValidIncomeTypeVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }

    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidIncomeTypeVM(vm: IncomeTypeVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = "  Name ";
      return false;
    }
    return true;;
  }

}
