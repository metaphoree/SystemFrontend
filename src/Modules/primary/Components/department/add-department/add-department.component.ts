import { Component, OnInit } from '@angular/core';
import { DepartmentVM } from 'src/Modules/primary/domainModels/department/DepartmentVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  viewModel : DepartmentVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new DepartmentVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }

}
