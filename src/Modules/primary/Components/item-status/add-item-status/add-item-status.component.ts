import { Component, OnInit } from '@angular/core';
import { ItemStatusVM } from 'src/Modules/primary/domainModels/item-status/ItemStatusVM';
import { SessionService } from 'src/Services/session-service/session.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-item-status',
  templateUrl: './add-item-status.component.html',
  styleUrls: ['./add-item-status.component.css']
})
export class AddItemStatusComponent implements OnInit {

  viewModel : ItemStatusVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private session : SessionService,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel = new ItemStatusVM();
  }
  ngOnInit(): void {
   
  }
  Add(event) : void {

    this.viewModel.FactoryId = this.session.getFactoryId();
    if (!this.IsValidItemStatusVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidItemStatusVM(vm: ItemStatusVM): boolean {
    if (!this.baseService.isValidString(vm.Name)) {
      this.message = "  Name ";
      return false;
    }
    return true;;
  }
}
