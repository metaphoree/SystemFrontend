import { Component, OnInit } from '@angular/core';
import { SalesVM } from 'src/Modules/primary/domainModels/sales/SalesVM';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { DialogService } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { UtilService } from 'src/Services/util-service/util.service';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { DDModelVMs_ } from 'src/Modules/primary/domainModels/DDModelVMs';
import { InitialLoadDataVM } from 'src/Modules/primary/domainModels/InitLoadDataVM';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { SalesItemVM } from 'src/Modules/primary/domainModels/sales/SalesItemVM';
import { SessionService } from 'src/Services/session-service/session.service';

@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.css']
})
export class SaleProductComponent implements OnInit {

  salesVm: SalesVM;
  initLoadDataVM: InitialLoadDataVM;
  getDataListVM: GetDataListVM;
  ddModelVms: DDModelVMs_;
  ddModelVmsPageSpecific: DDModelVMs_;
  quantity: number = 0;
  unitPrice: number = 0;
  selectedCustomer: CustomerVM = new CustomerVM();
  selectedItem: ItemVM = new ItemVM();
  selectedItemCategory: ItemCategoryVM = new ItemCategoryVM();

  // CONSTRUCTOR
  constructor(private dialogService: DialogService,
    private baseService: BaseServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private util: UtilService,
    private session: SessionService) {

  }
  ngOnInit(): void {
    this.getDataListVM = new GetDataListVM();
    this.ddModelVms = new DDModelVMs_();
    this.ddModelVmsPageSpecific = new DDModelVMs_();
    this.initLoadDataVM = new InitialLoadDataVM();
    this.GetInitialData();
    this.salesVm = new SalesVM();
  }

  // GETTING LIST CATEGORIES FOR DROP DOWN
  GetInitialData(): void {
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 1000;

    this.baseService.set<InitialLoadDataVM>(ApiUrl.GetSalesInitData, this.getDataListVM)
      .subscribe((data) => {

        this.initLoadDataVM.ItemVMs = data.ItemVMs;
        this.initLoadDataVM.ItemCategoryVMs = data.ItemCategoryVMs;
        this.initLoadDataVM.CustomerVMs = data.CustomerVMs;

        this.initLoadDataVM.IncomeTypeVMs = data.IncomeTypeVMs;
        this.initLoadDataVM.InvoiceTypeVMs = data.InvoiceTypeVMs;
        this.initLoadDataVM.ItemStatusVMs = data.ItemStatusVMs;

        console.log(this.initLoadDataVM.IncomeTypeVMs);
        console.log(this.initLoadDataVM.InvoiceTypeVMs);
        console.log(this.initLoadDataVM.ItemStatusVMs);

        // drop downs initializations
        this.ddModelVms.CustomerVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.CustomerVMs, ['Name', 'Id'], 'Select Customer');
        this.ddModelVmsPageSpecific.CustomerVMs = this.ddModelVms.CustomerVMs.slice();


        this.ddModelVms.ItemCategoryVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemCategoryVMs, ['Name', 'Id'], 'Select Category');
        this.ddModelVmsPageSpecific.ItemCategoryVMs = this.ddModelVms.ItemCategoryVMs.slice();


        this.ddModelVms.ItemVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemVMs, ['Name', 'Id'], 'Select Item');
        this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();



        //

        this.ddModelVms.IncomeTypeVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.IncomeTypeVMs, ['Name', 'Id'], 'Select Income type');
        this.ddModelVmsPageSpecific.IncomeTypeVMs = this.ddModelVms.IncomeTypeVMs.slice();


        console.log(this.initLoadDataVM.InvoiceTypeVMs);
        this.ddModelVms.InvoiceTypeVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.InvoiceTypeVMs, ['Name', 'Id'], 'Select Invoice type');
        this.ddModelVmsPageSpecific.InvoiceTypeVMs = this.ddModelVms.InvoiceTypeVMs.slice();


        console.log(this.initLoadDataVM.ItemStatusVMs);
        this.ddModelVms.ItemStatusVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemStatusVMs, ['Name', 'Id'], 'Select Item status');
        this.ddModelVmsPageSpecific.ItemStatusVMs = this.ddModelVms.ItemStatusVMs.slice();




        this.salesVm.EmployeeId = this.session.getCurrentUserId();
        this.salesVm.IncomeType = this.initLoadDataVM.IncomeTypeVMs.filter((value, index, arr) => { return value.Name == 'Sales' }).shift();
        this.salesVm.FactoryId = this.session.getFactoryId();
        this.salesVm.InvoiceType = this.initLoadDataVM.InvoiceTypeVMs.filter((value, index, arr) => { return value.Name == 'Sales' })[0];
        console.log(this.ddModelVms);
      });
  }
  ItemSelected(event): void {
    console.log(event.value);
    // this.ddModelVmsPageSpecific.ItemCategoryVMs = [];
    // this.ddModelVmsPageSpecific.ItemCategoryVMs = this.ddModelVms.ItemCategoryVMs.filter((val, i, arr) => {
    //   return val.value.Id == event.value.CategoryId
    // });
    this.selectedItemCategory = this.ddModelVms.ItemCategoryVMs.find(x => x.value.Id == event.value.CategoryId).value;

  }
  ItemCategorySelected(event): void {
    // console.log(event.value);
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
    // else {
    //   this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();
    // }

  }
  CustomerSelected(event): void {
    this.salesVm.CustomerVM = this.selectedCustomer;
    console.log(event.value);
    console.log(event);
  }

  Add(event, selectedItem, selectedItemCategory, quantity, unitPrice): void {
    let item = new SalesItemVM();
    item.Item = this.selectedItem;
    item.ItemCategory = this.selectedItemCategory;
    item.Quantity = quantity;
    item.UnitPrice = unitPrice;
    this.salesVm.ItemList.push(item);
    this.CalculateTotal(this.salesVm);
  }
  CalculateTotal(tempArr: SalesVM): void {
    tempArr.TotalAmount = 0;
    tempArr.ItemList.forEach((item, i, arr) => {
      tempArr.TotalAmount += tempArr.ItemList[i].Quantity * tempArr.ItemList[i].UnitPrice;
    });
  }

  Changed(type: string): void {
    if (type == 'PaidAmount') {
      this.salesVm.DueAmount = this.salesVm.TotalAmount - this.salesVm.PaidAmount;
    }
    else if (type == 'DiscountAmount') {
      this.salesVm.TotalAmount = this.salesVm.TotalAmount - this.salesVm.DiscountAmount;
      this.salesVm.DueAmount = this.salesVm.DueAmount - this.salesVm.DiscountAmount;
    }
  }
  Remove(item: SalesItemVM): void {
    let indexOfDeletingItem = this.salesVm.ItemList.indexOf(item);
    this.salesVm.ItemList.splice(indexOfDeletingItem, 1);
    this.CalculateTotal(this.salesVm);
  }

  AddSales(): void {
    this.salesVm.ItemList.forEach((value, i, arr) => {
      arr[i].CustomerVM = this.salesVm.CustomerVM;
      arr[i].EmployeeId = this.session.getCurrentUserId();
      arr[i].FactoryId = this.session.getFactoryId();
      arr[i].ItemStatus = this.initLoadDataVM.ItemStatusVMs.filter((value, i, arr) => {
       return arr[i].Name == 'GOOD'
      })[0];
    });
    console.log(this.salesVm);
    this.baseService.setNo(ApiUrl.AddSales, this.salesVm)
      .subscribe((data) => {
        console.log(data);

      });
  }

}
