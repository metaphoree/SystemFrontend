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
import { ItemStatusVM } from 'src/Modules/primary/domainModels/item-status/ItemStatusVM';

@Component({
  selector: 'app-staff-production',
  templateUrl: './staff-production.component.html',
  styleUrls: ['./staff-production.component.css']
})
export class StaffProductionComponent implements OnInit {

  public viewModel: AddProductionVM;
  public viewModelList: AddProductionVM[];
  public getDataListVM: GetDataListVM;

  // selected objects from the dropdown
  public selectedStaff: StaffVM;
  public selectedItem: ItemVM;
  public selectedItemStatus: ItemStatusVM;
  public selectedItemList: ItemVM[];
  public selectedItemStatusList: ItemStatusVM[];
  public selectedItemCategory: ItemCategoryVM;
  public selectedItemCategoryList: ItemCategoryVM[];
  public selectedEquipment: EquipmentVM;
  public selctedQuantityList: number[];
  public selctedUnitPriceList: number[];
  // drop down init data
  // drop down data list carrier
  public initLoadDataVM: InitialLoadDataVM;
  public ddModelVms: DDModelVMs_;
  public ddModelVmsPageSpecific: DDModelVMs_;
  public message: string;

  constructor(private baseService: BaseServiceService,
    private util: UtilService,
    private session: SessionService,
    private messageService: MessageService,
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig) {

    this.viewModel = new AddProductionVM();
    this.getDataListVM = new GetDataListVM();
    this.viewModelList = [];
    this.selctedQuantityList = [];
    this.selectedStaff = new StaffVM();
    this.selectedItem = new ItemVM();
    this.selectedItemStatus = new ItemStatusVM();
    this.selectedItemCategory = new ItemCategoryVM();
    this.selectedEquipment = new EquipmentVM();
    this.selectedItemList = [];
    this.selectedItemCategoryList = [];
    this.selctedUnitPriceList = [];
    this.selectedItemStatusList = [];
    this.ddModelVms = new DDModelVMs_();
    this.ddModelVmsPageSpecific = new DDModelVMs_();
    this.initLoadDataVM = new InitialLoadDataVM();


    this.ddModelVms = this.dynamicDialogConfig.data.ddModel;
    this.initLoadDataVM = this.dynamicDialogConfig.data.initLoadDataVM;
    this.ddModelVmsPageSpecific.EquipmentVMs = this.ddModelVms.EquipmentVMs.slice();
    this.ddModelVmsPageSpecific.ItemCategoryVMs = this.ddModelVms.ItemCategoryVMs.slice();
    this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();
    this.ddModelVmsPageSpecific.StaffVMs = this.ddModelVms.StaffVMs.slice();
    this.ddModelVmsPageSpecific.InvoiceTypeVMs = this.ddModelVms.InvoiceTypeVMs.slice();
    this.ddModelVmsPageSpecific.ItemStatusVMs = this.ddModelVms.ItemStatusVMs.slice();
  }

  ngOnInit(): void {

  }

  SelectedStaff(event): void {
    let cust = event.value;
    this.viewModel.StaffId = cust.Id;
    this.viewModel.StaffName = cust.Name;
    console.log(event.value);
    console.log(event);
  }
  SelectedItem(event): void {
    let cust = event.value;
    this.viewModel.ItemId = cust.Id;
    this.selectedItemCategory = this.ddModelVms.ItemCategoryVMs.find(x => x.value.Id == event.value.CategoryId).value;
    this.viewModel.ItemCategoryId = this.selectedItemCategory.Id;
    // console.log(event.value);
    // console.log(event);
    console.log(this.selectedItem);
  }
  SelectedItemStatus(event): void {
    let status = event.value;
    this.viewModel.ItemStatusId = status.Id;
    this.SelectedItemStatus = this.ddModelVms.ItemStatusVMs.find(x => x.value.Id == event.value.Id).value;
    this.viewModel.ItemStatusId = this.selectedItemStatus.Id;
    // console.log(event.value);
    // console.log(event);
    console.log(this.selectedItem);
  }
  AddSelectedItem(): void {
    this.selectedItemList.push(this.selectedItem);
    this.selectedItemStatusList.push(this.selectedItemStatus);
    this.selectedItemCategoryList.push(this.selectedItemCategory);
    this.selctedQuantityList.push(this.viewModel.Quantity);
    this.selctedUnitPriceList.push(this.viewModel.UnitPrice);
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

  Add(event): void {
    this.viewModel.FactoryId = this.session.getFactoryId();
    this.viewModel.ExecutorId = this.session.getCurrentUserId();
    // this.viewModel.ItemStatusId = this.initLoadDataVM.ItemStatusVMs.filter((value, i, arr) => {
    //   return arr[i].Name == StatusItem[StatusItem.GOOD];
    // })[0].Id;
    this.viewModel.InvoiceTypeId = this.initLoadDataVM.InvoiceTypeVMs.filter((value, i, arr) => {
      return arr[i].Name == InvoiceType[InvoiceType.StaffProduction];
    })[0].Id;

    if (!this.IsValidStaffProductionVM(this.viewModel)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
      return;
    }
    for (let index = 0; index < this.selectedItemList.length; index++) {
      let vm = { ...this.viewModel };
      vm.ItemCategoryId = this.selectedItemCategoryList[index].Id;
      vm.ItemId = this.selectedItemList[index].Id;
      vm.ItemStatusId = this.selectedItemStatusList[index].Id;
      vm.ItemStatusName = this.selectedItemStatusList[index].Name;
      vm.ItemCategoryName = this.selectedItemCategoryList[index].Name;
      vm.ItemName = this.selectedItemList[index].Name;
      vm.Quantity = this.selctedQuantityList[index];
      vm.UnitPrice = this.selctedUnitPriceList[index];
      this.viewModelList.push(vm);
    }
     this.dynamicDialogRef.close(this.viewModelList);
  }

  IsValidStaffProductionVM(vm: AddProductionVM): boolean {
    if (!this.baseService.isValidString(vm.StaffId)) {
      this.message = " Staff Name "
      return false;
    }
    if (this.selectedItemList.length <= 0) {
      this.message = " atleast one item "
      return false;
    }
    return true;
  }


}
