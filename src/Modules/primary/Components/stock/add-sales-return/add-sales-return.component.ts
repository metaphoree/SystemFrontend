import { Component, OnInit } from '@angular/core';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { ItemStatusVM } from 'src/Modules/primary/domainModels/item-status/ItemStatusVM';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { PageData } from 'src/Modules/primary/domainModels/PageData';
import { PurchaseReturnVM } from 'src/Modules/primary/domainModels/stock/PurchaseReturnVM';
import { SessionService } from 'src/Services/session-service/session.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InvoiceType, ExpenseType } from 'src/AppUtils/AppConstant/app-constant';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { SalesReturnVM } from 'src/Modules/primary/domainModels/stock/SalesReturnVM';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-sales-return',
  templateUrl: './add-sales-return.component.html',
  styleUrls: ['./add-sales-return.component.css']
})
export class AddSalesReturnComponent implements OnInit {

  // 
  selectedItem: ItemVM;
  selectedItemCategory: ItemCategoryVM;
  selectedItemStatus: ItemStatusVM;
  selectedCustomer: CustomerVM;

  pageData: PageData;
  viewModel: SalesReturnVM;
  message : string;
  constructor(private session: SessionService,
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private baseService : BaseServiceService,
    private messageService : MessageService) {

    this.pageData = this.dynamicDialogConfig.data.pageData;
    console.log(this.pageData);
    this.viewModel = new SalesReturnVM();
  }

  ngOnInit(): void {
  }



  QuantityChanged(): void {
    // alert("my name");
    // if (!isNaN(this.viewModel.UnitPrice) && isNumber(this.viewModel.UnitPrice)) {
    //   if (isNumber(this.viewModel.Quantity)) {
    //     this.viewModel.TotalAmount = this.viewModel.UnitPrice * this.viewModel.Quantity;
    //   }
    // }
    this.viewModel.TotalAmount = this.viewModel.UnitPrice * this.viewModel.Quantity;
    // alert();
  }

  CustomerSelected(event): void {
    this.viewModel.CustomerId = event.value.CustomerId;
    this.viewModel.CustomerName = event.value.Name;
    console.log(event.value);
    console.log(event);
  }
  ItemSelected(event): void {
    this.viewModel.ItemId = event.value.Id;
    //this.purchaseVm.SupplierVM = event.value;
    this.selectedItemCategory = this.pageData.ddModelVms.ItemCategoryVMs.find(x => x.value.Id == event.value.CategoryId).value;
    this.viewModel.ItemCategoryId = this.selectedItemCategory.Id;
    this.viewModel.UnitPrice = event.value.UnitPrice;
    console.log(event.value);
    console.log(event);
  }
  ItemCategorySelected(event): void {
    this.viewModel.ItemCategoryId = event.value.Id;
    //this.purchaseVm.SupplierVM = event.value;
    if (event.value.value == 'TitleVal') {
      console.log(event);
      //  alert('MyValue');
      this.pageData.ddModelVmsPageSpecific.ItemVMs = this.pageData.ddModelVms.ItemVMs.slice();
    }
    else if (event.value != null) {
      this.pageData.ddModelVmsPageSpecific.ItemVMs = this.pageData.ddModelVms.ItemVMs.filter((value, i, arr) => {
        return event.value.Id == value.value.CategoryId
      });
    }
    console.log(event.value);
    console.log(event);
  }
  ItemStatusSelected(event): void {
    this.viewModel.ItemStatusId = event.value.Id;
    // this.purchaseVm.SupplierVM = event.value;
    console.log(event.value);
    console.log(event);
  }

  Add(event): void {
    this.viewModel.FactoryId = this.session.getFactoryId();
    this.viewModel.EmployeeId = this.session.getCurrentUserId();
    console.log(InvoiceType[InvoiceType.SalesReturn]);
    console.log(this.pageData.initLoadDataVM
      .InvoiceTypeVMs);
    this.viewModel.InvoiceTypeId = this.pageData.initLoadDataVM
      .InvoiceTypeVMs.filter((val, i, arr) => {
        return val.Name == InvoiceType[InvoiceType.SalesReturn];
      })[0].Id;


      this.viewModel.ExpenseTypeId = this.pageData.initLoadDataVM
      .ExpenseTypeVMs.filter((val, i, arr) => {
        return val.Name == ExpenseType[ExpenseType.SalesReturn];
      })[0].Id;

      if (!this.IsValidSalesReturnVM(this.viewModel)) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Provide' + this.message });
        return;
      }
    this.dynamicDialogRef.close(this.viewModel);
  }
  IsValidSalesReturnVM(vm: SalesReturnVM): boolean {
    if (!this.baseService.isValidString(vm.CustomerId)) {
      this.message = " Customer ";
      return false;
    }
    if (!this.baseService.isValidString(vm.ItemId)) {
      this.message = " Item ";
      return false;
    }
    if (!this.baseService.isValidString(vm.ItemCategoryId)) {
      this.message = " Item Category ";
      return false;
    }
    if (!this.baseService.isValidString(vm.ItemStatusId)) {
      this.message = " Item Status ";
      return false;
    }
    return true;;
  }


}
