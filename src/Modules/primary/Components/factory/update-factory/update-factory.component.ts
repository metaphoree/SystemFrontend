import { Component, OnInit } from '@angular/core';
import { FactoryVM } from 'src/Modules/primary/domainModels/factory/FactoryVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-factory',
  templateUrl: './update-factory.component.html',
  styleUrls: ['./update-factory.component.css']
})
export class UpdateFactoryComponent implements OnInit {

  viewModel: FactoryVM;
  subscriptionStart: Date;
  subscriptionEnd: Date;
  message: string;
  constructor(private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private baseService: BaseServiceService,
    private messageService: MessageService) {
    this.viewModel = this.dynamicDialogConfig.data.modelData;

    console.log(typeof (this.viewModel.SubscriptionStart));
    this.viewModel.SubscriptionStart =
      this.subscriptionStart = new Date(
        this.viewModel.SubscriptionStart
      );


    this.subscriptionEnd = new Date(
      this.viewModel.SubscriptionEnd
    );

    this.viewModel.SubscriptionStart = this.subscriptionStart;
    this.viewModel.SubscriptionEnd = this.subscriptionEnd;

  }

  ngOnInit(): void {
  }

  Edit(event): void {
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
