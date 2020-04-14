import { Component, OnInit } from '@angular/core';
import { AddProductionVM } from 'src/Modules/primary/domainModels/production/AddProductionVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { SessionService } from 'src/Services/session-service/session.service';
import { MessageService } from 'primeng/api';
import { UtilService } from 'src/Services/util-service/util.service';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { InvoiceType, IncomeType, StatusItem } from 'src/AppUtils/AppConstant/app-constant';
import { CommonResponse } from 'src/Modules/primary/domainModels/CommonResponse';
import { StaffVM } from 'src/Modules/primary/domainModels/staff/StaffVM';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { EquipmentVM } from 'src/Modules/primary/domainModels/equipment/EquipmentVM';
import { InitialLoadDataVM } from 'src/Modules/primary/domainModels/InitLoadDataVM';
import { DDModelVMs_ } from 'src/Modules/primary/domainModels/DDModelVMs';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-staff-production',
  templateUrl: './staff-production.component.html',
  styleUrls: ['./staff-production.component.css']
})
export class StaffProductionComponent implements OnInit {

  public viewModel: AddProductionVM;
  public getDataListVM: GetDataListVM;

  // selected objects from the dropdown
  public selectedStaff: StaffVM;
  public selectedItem: ItemVM;
  public selectedItemCategory: ItemCategoryVM;
  public selectedEquipment: EquipmentVM;


  // drop down init data
  // drop down data list carrier
  public initLoadDataVM: InitialLoadDataVM;
  public ddModelVms: DDModelVMs_;
  public ddModelVmsPageSpecific: DDModelVMs_;


  constructor(private baseService: BaseServiceService,
    private util: UtilService,
    private session: SessionService,
    private messageService: MessageService,
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig) {

    this.viewModel = new AddProductionVM();
    this.getDataListVM = new GetDataListVM();

    this.selectedStaff = new StaffVM();
    this.selectedItem = new ItemVM();
    this.selectedItemCategory = new ItemCategoryVM();
    this.selectedEquipment = new EquipmentVM();

    this.ddModelVms = new DDModelVMs_();
    this.ddModelVmsPageSpecific = new DDModelVMs_();
    this.initLoadDataVM = new InitialLoadDataVM();


    this.ddModelVms = this.dynamicDialogConfig.data.ddModel;
    this.initLoadDataVM = this.dynamicDialogConfig.data.initLoadDataVM;

    
    this.ddModelVmsPageSpecific.EquipmentVMs = this.ddModelVms.EquipmentVMs.slice();
    this.ddModelVmsPageSpecific.ItemCategoryVMs = this.ddModelVms.ItemCategoryVMs.slice();
    this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();
    this.ddModelVmsPageSpecific.StaffVMs = this.ddModelVms.StaffVMs.slice();
  }

  ngOnInit(): void {

  }

  SelectedStaff(event): void {
    let cust = event.value;
    this.viewModel.StaffId = cust.Id;
    console.log(event.value);
    console.log(event);
  }
  SelectedItem(event): void {
    let cust = event.value;
    this.viewModel.ItemId = cust.Id;
    this.selectedItemCategory = this.ddModelVms.ItemCategoryVMs.find(x => x.value.Id == event.value.CategoryId).value;
    this.viewModel.ItemCategoryId = this.selectedItemCategory.Id;
    console.log(event.value);
    console.log(event);
  }
  SelectedItemCategory(event): void {
    let cust = event.value;
    this.viewModel.ItemCategoryId = cust.Id;

    this.ddModelVmsPageSpecific.ItemVMs = [];
    if (event.value.value == 'TitleVal') {
      console.log(event);
      //  alert('MyValue');
      this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();
    }
    else if (event.value != null) {
      this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.filter((value, i, arr) => {
        return event.value.Id == value.value.CategoryId
      });
    }
    console.log(event.value);
    console.log(event);
  }
  SelectedEquipment(event): void {
    let cust = event.value;
    this.viewModel.EquipmentId = cust.Id;
    console.log(event.value);
    console.log(event);
  }






  // Add(event) : void {
  //   console.log('this.selectedItem');console.log(this.selectedItem);
  //   this.viewModel.CategoryId = this.selectedItem;
  //   this.dynamicDialogRef.close(this.viewModel);
  // }
  Add(event): void {
    // this.viewModel. = this.session.getCurrentUserId();
    this.viewModel.FactoryId = this.session.getFactoryId();
    this.viewModel.ExecutorId = this.session.getCurrentUserId();
    console.log('---------------custom-----------------');
    console.log(this.initLoadDataVM);
    this.viewModel.ItemStatusId = this.initLoadDataVM.ItemStatusVMs.filter((value, i, arr) => {
      return arr[i].Name == StatusItem[StatusItem.GOOD];
     })[0].Id;
    // console.log(InvoiceType[InvoiceType.ClientPayment]);

    // this.viewModel.InvoiceTypeId = this.initLoadDataVM.InvoiceTypeVMs.filter((val, index, arr) => {
    //   return arr[index].Name == InvoiceType[InvoiceType.ClientPayment];
    // })[0].Id;
    // this.viewModel.TypeId = this.initLoadDataVM.IncomeTypeVMs.filter((val, index, arr) => {
    //   return arr[index].Name == IncomeType[IncomeType.ClientPaymentRecieved];
    // })[0].Id;
    this.dynamicDialogRef.close(this.viewModel);

  }
}
