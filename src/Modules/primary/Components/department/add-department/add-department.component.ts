import { Component, OnInit } from '@angular/core';
import { DepartmentVM } from 'src/Modules/primary/domainModels/department/DepartmentVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';
import { StockVM } from 'src/Modules/primary/domainModels/stock/StockVM';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  viewModel : DepartmentVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel = new DepartmentVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    if (!this.IsValidDepartmentVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidDepartmentVM(vm: DepartmentVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = " Department Name ";
      return false;
    }
    return true;;
  }

}
