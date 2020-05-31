import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/Services/customer-service/customer-service.service';

import { SessionService } from 'src/Services/session-service/session.service';
import { DialogService } from 'primeng/dynamicdialog';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { MessageService, ConfirmationService } from 'primeng/api';

import { AddCustomerComponent } from '../add-customer/add-customer.component';

import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { WrapperListCustomerVM } from 'src/Modules/primary/domainModels/WrapperListCustomerVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
  providers: [DialogService, MessageService]
})
export class ClientManagementComponent implements OnInit {

  // VARIABLES
  columnList: any;
  wrapperItemList: WrapperListCustomerVM;
  getDataListVM: GetDataListVM;
  CurrentPageNo: number = 1;
  CurrentPageSize: number = 10;



  // CONSTRUCTOR
  constructor(private dialogService: DialogService,
    private baseService: BaseServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router) {
    this.wrapperItemList = new WrapperListCustomerVM();
    this.getDataListVM = new GetDataListVM();
  }

  // INIT
  ngOnInit(): void {
    this.columnList = [
      { field: 'Action', header: 'Action' },
      { field: 'Name', header: 'Name' },
      { field: 'Email', header: 'Email' },
      //  { field: 'PermanentAddress', header: 'Permanent Address' },
      { field: 'PresentAddress', header: 'Present Address' },
      { field: 'CellNo', header: 'CellNo' },
      //  { field: 'AlternateCellNo', header: 'Alternate CellNo' },
      { field: 'PaidAmount', header: 'Paid' },
      { field: 'PayableAmount', header: 'Payable' },
      { field: 'RecievedAmount', header: 'Recieved' },
      { field: 'RecievableAmount', header: 'Recievable' }
    ];
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 10;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
  }

  // EVENTS
  AddEvent(event): void {
    this.openModalAdd();
  }
  ModifyEvent(event, operationType, entity): void {
    console.log(operationType);
    console.log(entity);
    console.log(event);
    if (operationType == 'Edit') {
      this.openModalUpdate(entity);
    }
    if (operationType == 'Delete') {
      this.confirm(entity);
    }
  }
  SearchEvent(event): void {
    this.CurrentPageNo = 1;
    this.getDataListVM.PageNumber = this.CurrentPageNo;
    this.getDataListVM.PageSize = this.CurrentPageSize;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
  }







  // DB OPERATION FUNCTION
  DoDBOperation(operationType: DB_OPERATION, item: any): void {
    this.baseService.LoaderOn();
    let URL: string = '';
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetCustomer;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetCustomer;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateCustomer + '/' + item.CustomerId;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeleteCustomer;
        break;
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperListCustomerVM>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.TotalRecords = data.TotalRecords;
        console.log(this.wrapperItemList);
        this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
        this.baseService.LoaderOff();
      }
      );
  }

  // MODAL FUNCTION
  openModalAdd() {
    const ref = this.dialogService.open(AddCustomerComponent, {
      data: {

      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer",
      dismissableMask: true
    });
    ref.onClose.subscribe((item: any) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.CREATE, item);
      }
    });
  }
  openModalUpdate(item: any) {
    const ref = this.dialogService.open(EditCustomerComponent, {
      data: {
        modelData: item
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer",
      dismissableMask: true
    });
    ref.onClose.subscribe((item: any) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.UPDATE, item);
      }
    });
  }


  // DELETION CONFIRMATION
  confirm(entity: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.DoDBOperation(DB_OPERATION.DELETE, entity);
      },
      reject: () => {


      }
    });
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


  goto(event, option): void {
    if (option == 'payment') {
      this.router.navigateByUrl('home/client-mgmt-home/client-mgmt/payment')
    }
    else if (option == 'history') {
      this.router.navigateByUrl('home/client-mgmt-home/client-mgmt/history');
    }

  }

















}
