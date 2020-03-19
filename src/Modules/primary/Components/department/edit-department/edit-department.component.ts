import { Component, OnInit } from '@angular/core';
import { DepartmentVM } from 'src/Modules/primary/domainModels/department/DepartmentVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  viewModel : DepartmentVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }

  Edit(event) : void{
    this.dynamicDialogRef.close(this.viewModel);
  }


}
