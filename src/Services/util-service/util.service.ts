import { Injectable } from '@angular/core';
import { DDModel } from 'src/Models/Utils/DDModel';
import { DDModelVAOB } from 'src/Modules/primary/domainModels/DDModelVAOB';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { BaseServiceService } from '../base-service/base-service.service';
import { InitialLoadDataVM } from 'src/Modules/primary/domainModels/InitLoadDataVM';
import { ApiUrl } from '../RestUrls/api-url';
import { Observable } from 'rxjs';
import { DDModelVMs_ } from 'src/Modules/primary/domainModels/DDModelVMs';
import { PageData } from 'src/Modules/primary/domainModels/PageData';



@Injectable({
  providedIn: 'root'
})
export class UtilService {
  CurrntMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
  getDataListVM: GetDataListVM;
  initLoadDataVM: InitialLoadDataVM;
  ddModelVms: DDModelVMs_;
  ddModelVmsPageSpecific: DDModelVMs_;
  pageData: PageData;
  constructor(
    private baseService: BaseServiceService) {
    this.getDataListVM = new GetDataListVM();
    this.initLoadDataVM = new InitialLoadDataVM();
    this.ddModelVms = new DDModelVMs_();
    this.ddModelVmsPageSpecific = new DDModelVMs_();
    this.pageData = new PageData();
  }

  public convertToDropdownModel(arr: any[], propertyNames: string[], titleValue: string): DDModel[] {
    let outputArr: DDModel[] = [{ label: titleValue, value: null }];
    for (let i = 0; i < arr.length; i++) {
      let temp = new DDModel(arr[i][propertyNames[0]], arr[i][propertyNames[1]]);
      outputArr.push(temp);
      // for (let key in propertyNames) {
      //   if (arr[i].hasOwnProperty(key)) {
      //     let element = arr[i][key];

      //   }
      // }
    }
    return outputArr;
  }
  public convertToDDM_ValueAsObject(arr: any[], propertyNames: string[], titleValue: string): DDModelVAOB[] {

    let outputArr: DDModelVAOB[] = [{ label: titleValue, value: { value: 'TitleVal' } }];

    for (let i = 0; i < arr.length; i++) {
      let temp = new DDModelVAOB(arr[i][propertyNames[0]], arr[i]);
      outputArr.push(temp);
    }
    return outputArr;
  }
  public getUTCDateTime(input_date: Date): Date {
    let date = input_date;
    let now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
      date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    console.log(new Date(now_utc));
    // console.log(now_utc);
    return new Date(now_utc);
  }


  public initStaff_Data = new Observable((observer) => {
    let pageDataTemp  = new PageData(); 
    let ddModelVmsTemp = new DDModelVMs_();
    let ddModelVmsPageSpecificTemp = new DDModelVMs_();
    let bn = new InitialLoadDataVM();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 1000;
    this.baseService.set<InitialLoadDataVM>(ApiUrl.StaffInitData, this.getDataListVM)
      .subscribe((data) => {
        bn.RoleVMs = data.RoleVMs;
        ddModelVmsTemp.RoleVMs =
        this.convertToDDM_ValueAsObject(bn.RoleVMs, ['Name', 'Id'], 'Select Role Profile');
         ddModelVmsPageSpecificTemp.RoleVMs = ddModelVmsTemp.RoleVMs.slice();
         pageDataTemp.ddModelVms =     ddModelVmsTemp;
         pageDataTemp.ddModelVmsPageSpecific = ddModelVmsPageSpecificTemp;
         pageDataTemp.initLoadDataVM = bn;
        
         observer.next(pageDataTemp);
         observer.complete();
      });
  });










  public initDD_Data = new Observable((observer) => {
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 1000;
    this.baseService.set<InitialLoadDataVM>(ApiUrl.PaymentInitialData, this.getDataListVM)
      .subscribe((data) => {
        console.log(data);
        this.initLoadDataVM.SupplierVMs = data.SupplierVMs;
        this.initLoadDataVM.ExpenseTypeVMs = data.ExpenseTypeVMs;
        this.initLoadDataVM.InvoiceTypeVMs = data.InvoiceTypeVMs;
        this.initLoadDataVM.IncomeTypeVMs = data.IncomeTypeVMs;
        this.initLoadDataVM.StaffVMs = data.StaffVMs;
        this.initLoadDataVM.CustomerVMs = data.CustomerVMs;
        this.initLoadDataVM.ItemCategoryVMs = data.ItemCategoryVMs;
        this.initLoadDataVM.ItemVMs = data.ItemVMs;
        this.initLoadDataVM.ItemStatusVMs = data.ItemStatusVMs;


        console.log(this.initLoadDataVM.InvoiceTypeVMs);
        // drop downs initializations
        this.ddModelVms.SupplierVMs =
          this.convertToDDM_ValueAsObject(this.initLoadDataVM.SupplierVMs, ['Name', 'Id'], 'Select Supplier');
        this.ddModelVmsPageSpecific.SupplierVMs = this.ddModelVms.SupplierVMs.slice();
        this.ddModelVms.ExpenseTypeVMs =
          this.convertToDDM_ValueAsObject(this.initLoadDataVM.ExpenseTypeVMs, ['Name', 'Id'], 'Select Expense type');
        this.ddModelVmsPageSpecific.ExpenseTypeVMs = this.ddModelVms.ExpenseTypeVMs.slice();
        this.ddModelVms.InvoiceTypeVMs =
          this.convertToDDM_ValueAsObject(this.initLoadDataVM.InvoiceTypeVMs, ['Name', 'Id'], 'Select Invoice type');
        this.ddModelVmsPageSpecific.InvoiceTypeVMs = this.ddModelVms.InvoiceTypeVMs.slice();
        this.ddModelVms.CustomerVMs =
          this.convertToDDM_ValueAsObject(this.initLoadDataVM.CustomerVMs, ['Name', 'Id'], 'Select Customer');
        this.ddModelVmsPageSpecific.CustomerVMs = this.ddModelVms.CustomerVMs.slice();
        this.ddModelVms.IncomeTypeVMs =
          this.convertToDDM_ValueAsObject(this.initLoadDataVM.IncomeTypeVMs, ['Name', 'Id'], 'Select IncomeType');
        this.ddModelVmsPageSpecific.IncomeTypeVMs = this.ddModelVms.IncomeTypeVMs.slice();
        this.ddModelVms.StaffVMs =
          this.convertToDDM_ValueAsObject(this.initLoadDataVM.StaffVMs, ['Name', 'Id'], 'Select Staff');
        this.ddModelVmsPageSpecific.StaffVMs = this.ddModelVms.StaffVMs.slice();



        this.ddModelVms.ItemCategoryVMs =
          this.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemCategoryVMs, ['Name', 'Id'], 'Select Category');
        this.ddModelVmsPageSpecific.ItemCategoryVMs = this.ddModelVms.ItemCategoryVMs.slice();


        this.ddModelVms.ItemVMs =
          this.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemVMs, ['Name', 'Id'], 'Select Item');
        this.ddModelVmsPageSpecific.ItemVMs = this.ddModelVms.ItemVMs.slice();


        this.ddModelVms.ItemStatusVMs =
          this.convertToDDM_ValueAsObject(this.initLoadDataVM.ItemStatusVMs, ['Name', 'Id'], 'Select Item Status');
        this.ddModelVmsPageSpecific.ItemStatusVMs = this.ddModelVms.ItemStatusVMs.slice();


        // this.purchaseVm.InvoiceType = this.initLoadDataVM.InvoiceTypeVMs.filter((value, index, arr) => { return value.Name == 'Purchase' })[0];
        // this.purchaseVm.EmployeeId = this.session.getCurrentUserId();
        // this.purchaseVm.ExpenseType = this.initLoadDataVM.ExpenseTypeVMs.filter((value, index, arr) => { return value.Name == 'Purchase' })[0];
        // this.purchaseVm.FactoryId = this.session.getFactoryId();      
        //console.log(this.purchaseVm.InvoiceType);
        console.log(this.ddModelVms);

        this.pageData.ddModelVmsPageSpecific = this.ddModelVmsPageSpecific;
        this.pageData.ddModelVms = this.ddModelVms;
        this.pageData.initLoadDataVM = this.initLoadDataVM;

        observer.next(this.pageData);
        observer.complete();
        // return this.pageData;

      });
    // observable execution
    // observer.next("bla bla bla")
    // observer.complete()
  })


  public getMonthList(): any {
    let monthList = [
      { label: this.CurrntMonth[0], value: this.CurrntMonth[0] },
      { label: this.CurrntMonth[1], value: this.CurrntMonth[1] },
      { label: this.CurrntMonth[2], value: this.CurrntMonth[2] },
      { label: this.CurrntMonth[3], value: this.CurrntMonth[3] },
      { label: this.CurrntMonth[4], value: this.CurrntMonth[4] },
      { label: this.CurrntMonth[5], value: this.CurrntMonth[5] },
      { label: this.CurrntMonth[6], value: this.CurrntMonth[6] },
      { label: this.CurrntMonth[7], value: this.CurrntMonth[7] },
      { label: this.CurrntMonth[8], value: this.CurrntMonth[8] },
      { label: this.CurrntMonth[9], value: this.CurrntMonth[9] },
      { label: this.CurrntMonth[10], value: this.CurrntMonth[10] },
      { label: this.CurrntMonth[11], value: this.CurrntMonth[11] }
    ];
    return monthList;
  }
  public getClientType(): any {
    let clientTypeList = [
      { label: 'Select Client Type', value: '' },
      { label: 'Customer', value: 'Customer' },
      { label: 'Staff', value: 'Staff' },
      { label: 'Supplier', value: 'Supplier' }
    ];
    return clientTypeList;
  }




  getCurrentMonth(): string {
    var CurrntMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
    //var CurrntMonth: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", ];  
    var month = new Date();
    var CrrntMonth = CurrntMonth[month.getMonth()];
    return CrrntMonth;
    // var span = document.createElement("span");  
    // span.style.color = "Blue";  
    // span.innerText = "getMonth Method \n Current Month is-> " + CrrntMonth + "\n";  
    // document.body.appendChild(span);  
  }


  //  var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
  //  d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);









  public pad(padChar: string, strToPad: string, padLeftOrRight: boolean, lenOfPadding): string {
    let st = Array(lenOfPadding).join(padChar);
    return this.padd(st, strToPad, padLeftOrRight);

  }
  public padd(pad: string, str: string, padLeft: boolean): string {
    if (typeof str === 'undefined')
      return pad;
    if (padLeft) {
      return (pad + str).slice(-pad.length);
    } else {
      return (str + pad).substring(0, pad.length);
    }
  }














}


