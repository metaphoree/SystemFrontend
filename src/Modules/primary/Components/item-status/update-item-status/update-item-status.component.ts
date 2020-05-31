import { Component, OnInit } from '@angular/core';
import { ItemStatusVM } from 'src/Modules/primary/domainModels/item-status/ItemStatusVM';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-item-status',
  templateUrl: './update-item-status.component.html',
  styleUrls: ['./update-item-status.component.css']
})
export class UpdateItemStatusComponent implements OnInit {

  viewModel : ItemStatusVM;
  message : string;
  constructor(private dynamicDialogRef : DynamicDialogRef,
    private  dynamicDialogConfig : DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) { 
    this.viewModel =  this.dynamicDialogConfig.data.modelData;
  }

  ngOnInit(): void {
  }

  Edit(event) : void{
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
