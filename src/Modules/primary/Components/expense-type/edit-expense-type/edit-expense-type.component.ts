import { Component, OnInit } from '@angular/core';
import { ExpenseTypeVM } from 'src/Modules/primary/domainModels/expense-type/ExpenseTypeVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-expense-type',
  templateUrl: './edit-expense-type.component.html',
  styleUrls: ['./edit-expense-type.component.css']
})
export class EditExpenseTypeComponent implements OnInit {

  viewModel : ExpenseTypeVM;
  constructor(private dynamicDialogRef : DynamicDialogRef,private  dynamicDialogConfig : DynamicDialogConfig) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }

  Edit(event) : void{
    this.dynamicDialogRef.close(this.viewModel);
  }
}
