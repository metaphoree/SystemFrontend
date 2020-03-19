import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IncomeTypeVM } from 'src/Modules/primary/domainModels/income-type/IncomeTypeVM';

@Component({
  selector: 'app-edit-income-type',
  templateUrl: './edit-income-type.component.html',
  styleUrls: ['./edit-income-type.component.css']
})
export class EditIncomeTypeComponent implements OnInit {

  viewModel : IncomeTypeVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }

  Edit(event) : void{
    this.dynamicDialogRef.close(this.viewModel);
  }

}
