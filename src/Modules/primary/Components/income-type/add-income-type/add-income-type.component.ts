import { Component, OnInit } from '@angular/core';
import { IncomeTypeVM } from 'src/Modules/primary/domainModels/income-type/IncomeTypeVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-income-type',
  templateUrl: './add-income-type.component.html',
  styleUrls: ['./add-income-type.component.css']
})
export class AddIncomeTypeComponent implements OnInit {

  viewModel : IncomeTypeVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new IncomeTypeVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }
}
