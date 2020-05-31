import { Component, OnInit } from '@angular/core';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  model : StaffVM;
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
    if(this.IsValidStaffVM(this.model)){
      this.dynamicDialogRef.close(this.model);
    }
    else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
    }
    
  }
  IsValidStaffVM(vm: StaffVM): boolean {
    if (this.baseService.isValidString(vm.Name)) {
        return true;
    }
    this.message = " Name ";
    return false;
  }
}
