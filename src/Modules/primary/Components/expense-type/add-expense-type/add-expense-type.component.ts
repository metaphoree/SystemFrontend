import { Component, OnInit } from '@angular/core';
import { ExpenseTypeVM } from 'src/Modules/primary/domainModels/expense-type/ExpenseTypeVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-expense-type',
  templateUrl: './add-expense-type.component.html',
  styleUrls: ['./add-expense-type.component.css']
})
export class AddExpenseTypeComponent implements OnInit {

  viewModel : ExpenseTypeVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel = new ExpenseTypeVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {
    this.dynamicDialogRef.close(this.viewModel);
  }

}
