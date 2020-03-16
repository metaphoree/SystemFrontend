import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  viewModel : StaffVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new StaffVM();
  }
  ngOnInit(): void {
  }
  AddCustomer(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }

}
