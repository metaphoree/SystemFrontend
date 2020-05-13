import { Component, OnInit } from '@angular/core';
import { PurchaseVM } from 'src/Modules/primary/domainModels/purchase/PurchaseVM';
import { InitialLoadDataVM } from 'src/Modules/primary/domainModels/InitLoadDataVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { DialogService } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { UtilService } from 'src/Services/util-service/util.service';
import { DDModelVMs, DDModelVMs_ } from 'src/Modules/primary/domainModels/DDModelVMs';
import { PurchaseItemVM } from 'src/Modules/primary/domainModels/purchase/PurchaseItemVM';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { ItemVM } from 'src/Modules/primary/domainModels/item/ItemVM';
import { ItemCategoryVM } from 'src/Modules/primary/domainModels/ItemCategory/ItemCategoryVM';
import { SupplierVM } from 'src/Modules/primary/domainModels/supplier/SupplierVM';
import { SessionService } from 'src/Services/session-service/session.service';
import { NgSwitchDefault } from '@angular/common';
import { WrapperPurchaseListVM } from 'src/Modules/primary/domainModels/purchase/WrapperPurchaseListVM';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';

@Component({
  selector: 'app-purchase-product',
  templateUrl: './purchase-product.component.html',
  styleUrls: ['./purchase-product.component.css']
})
export class PurchaseProductComponent implements OnInit {

  purchaseVm: PurchaseVM;
  initLoadDataVM: InitialLoadDataVM;
  getDataListVM: GetDataListVM;
  ddModelVms: DDModelVMs_;
  ddModelVmsPageSpecific: DDModelVMs_;
  quantity: number = 0;
  unitPrice: number = 0;
  selectedSupplier: SupplierVM = new SupplierVM();
  selectedItem: ItemVM = new ItemVM();
  selectedItemCategory: ItemCategoryVM = new ItemCategoryVM();



  columnList: any;
  childColumnList: any;
  CurrentPageNo: number = 1;
  CurrentPageSize: number = 10;
  wrapperItemList: WrapperPurchaseListVM;

  // CONSTRUCTOR
  constructor(private dialogService: DialogService,
    private baseService: BaseServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private util: UtilService,
    private session: SessionService) {


    this.columnList = [
      { field: 'Action', header: 'Action', fieldType: 'icon' },
      { field: 'SupplierName', header: 'SupplierName', fieldType: 'string' },
      { field: 'OcurranceDate', header: 'Occurence', fieldType: 'date' },
      { field: 'TotalAmount', header: 'Total', fieldType: 'number' },
      { field: 'PaidAmount', header: 'Paid', fieldType: 'number' },
      { field: 'DueAmount', header: 'Due', fieldType: 'number' },
      { field: 'DiscountAmount', header: 'Discount', fieldType: 'number' }
    ];
    this.childColumnList = [
      { field: 'Action', header: 'Action', fieldType: 'icon' },
      { field: 'ItemName', header: 'ItemName', fieldType: 'string' },
      { field: 'ItemCategoryName', header: 'ItemCategoryName', fieldType: 'string' },
      { field: 'Status', header: 'Status', fieldType: 'string' },
      { field: 'Quantity', header: 'Quantity', fieldType: 'number' },
      { field: 'UnitPrice', header: 'UnitPrice', fieldType: 'number' },
      { field: 'Month', header: 'Month', fieldType: 'string' }
    ];
  }
  ngOnInit(): void {
    this.getDataListVM = new GetDataListVM();
    this.ddModelVms = new DDModelVMs_();
    this.ddModelVmsPageSpecific = new DDModelVMs_();
    this.initLoadDataVM = new InitialLoadDataVM();
    this.purchaseVm = new PurchaseVM();
    this.wrapperItemList = new WrapperPurchaseListVM();
    this.GetInitialData();
    this.GetInitData();
  }

  GetInitData(): void {
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 10;
    this.getDataListVM.FactoryId = this.session.getFactoryId();
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
    // this.baseService.set<WrapperPurchaseListVM>(ApiUrl.GetAllPurchaseInvoice, this.getDataListVM)
    //   .subscribe((data) => {
    //     this.getPurchaseVMList = data.ListOfData;
    //   })
  }



  // GETTING LIST CATEGORIES FOR DROP DOWN
  GetInitialData(): void {
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 1000;

    this.baseService.set<InitialLoadDataVM>(ApiUrl.GetPurchaseInitData, this.getDataListVM)
      .subscribe((data) => {
        console.log(data);
        this.initLoadDataVM.ItemVMs = data.ItemVMs;
        this.initLoadDataVM.ItemCategoryVMs = data.ItemCategoryVMs;
        this.initLoadDataVM.SupplierVMs = data.SupplierVMs;

        this.initLoadDataVM.ExpenseTypeVMs = data.ExpenseTypeVMs;
        this.initLoadDataVM.InvoiceTypeVMs = data.InvoiceTypeVMs;
        this.initLoadDataVM.ItemStatusVMs = data.ItemStatusVMs;

        console.log(this.initLoadDataVM.InvoiceTypeVMs);

        // drop downs initializations
        this.ddModelVms.SupplierVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.SupplierVMs, ['Name', 'Id'], 'Select Supplier');
        this.ddModelVmsPageSpecific.SupplierVMs = this.ddModelVms.SupplierVMs.slice();


        this.ddModelVms.ItemCategoryVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemCategoryVMs, ['Name', 'Id'], 'Select Category');
        this.ddModelVmsPageSpecific.ItemCategoryVMs = this.ddModelVms.ItemCategoryVMs.slice();


        this.ddModelVms.ItemVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemVMs, ['Name', 'Id'], 'Select Item');
        this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();




        this.ddModelVms.ExpenseTypeVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ExpenseTypeVMs, ['Name', 'Id'], 'Select Income type');
        this.ddModelVmsPageSpecific.ExpenseTypeVMs = this.ddModelVms.ExpenseTypeVMs.slice();


        this.ddModelVms.InvoiceTypeVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.InvoiceTypeVMs, ['Name', 'Id'], 'Select Invoice type');
        this.ddModelVmsPageSpecific.InvoiceTypeVMs = this.ddModelVms.InvoiceTypeVMs.slice();


        this.ddModelVms.ItemStatusVMs =
          this.util.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemStatusVMs, ['Name', 'Id'], 'Select Item status');
        this.ddModelVmsPageSpecific.ItemStatusVMs = this.ddModelVms.ItemStatusVMs.slice();

        this.purchaseVm.InvoiceType = this.initLoadDataVM.InvoiceTypeVMs.filter((value, index, arr) => { return value.Name == 'Purchase' })[0];
        this.purchaseVm.EmployeeId = this.session.getCurrentUserId();
        this.purchaseVm.ExpenseType = this.initLoadDataVM.ExpenseTypeVMs.filter((value, index, arr) => { return value.Name == 'Purchase' })[0];
        this.purchaseVm.FactoryId = this.session.getFactoryId();
        console.log(this.purchaseVm.InvoiceType);


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
    this.purchaseVm.SupplierVM = event.value;
    console.log(event.value);
    console.log(event);
  }

  Add(event, selectedItem, selectedItemCategory, quantity, unitPrice): void {
    let item = new PurchaseItemVM();
    item.Item = this.selectedItem;
    item.ItemCategory = this.selectedItemCategory;
    item.Quantity = quantity;
    item.UnitPrice = unitPrice;
    this.purchaseVm.ItemList.push(item);
    this.CalculateTotal(this.purchaseVm);
  }
  CalculateTotal(tempArr: PurchaseVM): void {
    tempArr.TotalAmount = 0;
    tempArr.ItemList.forEach((item, i, arr) => {
      tempArr.TotalAmount += tempArr.ItemList[i].Quantity * tempArr.ItemList[i].UnitPrice;
    });
  }

  Changed(type: string): void {
    if (type == 'PaidAmount') {
      this.purchaseVm.DueAmount = this.purchaseVm.TotalAmount - this.purchaseVm.PaidAmount;
    }
    else if (type == 'DiscountAmount') {
      this.purchaseVm.TotalAmount = this.purchaseVm.TotalAmount - this.purchaseVm.DiscountAmount;
      this.purchaseVm.DueAmount = this.purchaseVm.DueAmount - this.purchaseVm.DiscountAmount;
    }
  }
  Remove(item: PurchaseItemVM): void {
    let indexOfDeletingItem = this.purchaseVm.ItemList.indexOf(item);
    this.purchaseVm.ItemList.splice(indexOfDeletingItem, 1);
    this.CalculateTotal(this.purchaseVm);
  }
  Refresh(): void {
    this.GetInitData();
  }
  AddPurchase(): void {
    this.purchaseVm.ItemList.forEach((value, i, arr) => {
      arr[i].SupplierVM = this.purchaseVm.SupplierVM;
      arr[i].EmployeeId = this.session.getCurrentUserId();
      arr[i].FactoryId = this.session.getFactoryId();
      arr[i].ItemStatus = this.initLoadDataVM.ItemStatusVMs.filter((value, i, arr) => {
        return arr[i].Name == 'GOOD'
      })[0];
    });
    console.log(this.purchaseVm);
    this.baseService.set<WrapperPurchaseListVM>(ApiUrl.AddPurchase, this.purchaseVm)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.TotalRecords = data.TotalRecords;
        this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
      });
  }




  // DB OPERATION FUNCTION
  DoDBOperation(operationType: DB_OPERATION, item: any): void {
    let URL: string = '';
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetItem;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetAllPurchaseInvoice;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateItem + '/' + item.Id;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeleteItem;
        break;
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperPurchaseListVM>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.TotalRecords = data.TotalRecords;
        this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
      }
      );
  }

  // PAGING FUNCTION
  GoToPage(op: any): void {
    switch (op) {
      case '+':
        this.CurrentPageNo++;
        // this.getDataListVM = new GetDataListVM();
        this.getDataListVM.PageNumber = this.CurrentPageNo;
        this.getDataListVM.PageSize = this.CurrentPageSize;
        this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
        break;
      case '-':
        if (this.CurrentPageNo > 1) {
          this.CurrentPageNo--
          // this.getDataListVM = new GetDataListVM();
          this.getDataListVM.PageNumber = this.CurrentPageNo;
          this.getDataListVM.PageSize = this.CurrentPageSize;
          this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
        }
        break;
    }
  }

  // RESET DATA TABLE
  Reset(): void {
    this.CurrentPageNo = 1;
    this.getDataListVM.GlobalFilter = "";
    this.getDataListVM.PageNumber = this.CurrentPageNo;
    this.getDataListVM.PageSize = this.CurrentPageSize;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);

  }
  ModifyEvent(event, operationType, entity): void {
    console.log(operationType);
    console.log(entity);
    console.log(event);
    // if (operationType == 'Edit') {
    //   this.openModalUpdate(entity);
    // }
    // if (operationType == 'Delete') {
    //   this.confirm(entity);
    // }
    if (operationType == 'Details') {
      //this.confirm(entity);
    }
  }












}
