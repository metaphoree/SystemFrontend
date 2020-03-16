import { Component, OnInit } from '@angular/core';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  model : StaffVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.model = this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }
  EditCustomer(event) : void {
    this.dynamicDialogRef.close(this.model);
  }
}
