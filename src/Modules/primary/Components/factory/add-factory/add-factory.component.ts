import { Component, OnInit } from '@angular/core';
import { FactoryVM } from 'src/Modules/primary/domainModels/factory/FactoryVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-factory',
  templateUrl: './add-factory.component.html',
  styleUrls: ['./add-factory.component.css']
})
export class AddFactoryComponent implements OnInit {

  viewModel: FactoryVM;
  SubscriptionStart = new Date();
  SubscriptionEnd = new Date();
  message : string;
  constructor(private dynamicDialogRef: DynamicDialogRef, 
    private dynamicDialogConfig: DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) {
    this.viewModel = new FactoryVM();
    // this.SubscriptionStart = new Date()
    this.SubscriptionStart =
      new Date(
        this.viewModel.SubscriptionStart.getDay(),
        this.viewModel.SubscriptionStart.getMonth(),
        this.viewModel.SubscriptionStart.getFullYear());

    console.log(this.SubscriptionStart);
    console.log(this.viewModel.SubscriptionStart);

    this.viewModel.SubscriptionStart = this.SubscriptionStart;


  }
  ngOnInit(): void {

  }
  Add(event): void {
    if (!this.IsValidFactoryVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }

    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidFactoryVM(vm: FactoryVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = "  Name ";
      return false;
    }
    return true;;
  }

}
