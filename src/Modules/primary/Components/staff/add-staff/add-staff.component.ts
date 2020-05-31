import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';
import { PageData } from 'src/Modules/primary/domainModels/PageData';
import { RoleVM } from 'src/Modules/primary/domainModels/role/RoleVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { LoginVM } from 'src/Modules/primary/domainModels/auth/LogInVM';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  viewModel: StaffVM;
  isManager: boolean;
  pageData: PageData;
  selectedRole: RoleVM;
  UserNameIsChecked: boolean;
  UserNameIsValid: boolean;
  message : string;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private baseService: BaseServiceService,
    private messageService : MessageService) {
    this.viewModel = new StaffVM();
    this.isManager = this.dynamicDialogConfig.data.isManager;
    this.pageData = new PageData();
    this.selectedRole = new RoleVM();
    this.UserNameIsChecked = false;
    this.UserNameIsValid = false;
    if (this.isManager) {
      // this.viewModel.Role = "Manager";
      this.pageData = this.dynamicDialogConfig.data.pagaData;
    }
  }
  ngOnInit(): void {
  }
  AddCustomer(event): void {
    if (this.isManager) {
      this.viewModel.RoleId = this.selectedRole.Id;
      this.viewModel.IsManager = true;
    }
    if(this.IsValidStaffVM(this.viewModel)){
      this.dynamicDialogRef.close(this.viewModel);
    }
    else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
    }
  }



  CheckUserName(event): void {
    let vm = new LoginVM();
    vm.UserName = this.viewModel.UserName;
    if (!this.baseService.isValidString(vm.UserName)) {
      this.UserNameIsChecked = true;
      this.UserNameIsValid = true;
    }
    else {
      this.baseService.set<boolean>(ApiUrl.UserNameExist, vm).subscribe(
        (data) => {
          this.UserNameIsChecked = true;
          console.log(data);
          this.UserNameIsValid = data;
          this.baseService.LoaderOff();
        }
      );
    }

  }

  IsValidStaffVM(vm: StaffVM): boolean {
    if (this.baseService.isValidString(vm.Name)) {
      if (!this.isManager) {
        return true;
      }
      else {
        if (!this.baseService.isValidString(vm.UserName)) {
          this.message = " UserName ";
          return false;
        }
        if (!this.baseService.isValidString(vm.Password)) {
          this.message = " Password ";
          return false;
        }
        if (!this.baseService.isValidString(vm.RoleId)) {
          this.message = " Role Profile ";
          return false;
        }
        return true;
      }
    }
    this.message = " Name ";
    return false;
  }










}
