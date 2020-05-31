import { Component, OnInit } from '@angular/core';
import { WrapperInvoiceTypeListVM } from 'src/Modules/primary/domainModels/invoice-type/WrapperInvoiceTypeListVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { DialogService } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { WrapperItemCategoryListVM } from 'src/Modules/primary/domainModels/ItemCategory/WrapperItemCategoryListVM';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { AddInvoiceTypeComponent } from '../add-invoice-type/add-invoice-type.component';
import { EditInvoiceTypeComponent } from '../edit-invoice-type/edit-invoice-type.component';

@Component({
  selector: 'app-invoice-type-mgmt',
  templateUrl: './invoice-type-mgmt.component.html',
  styleUrls: ['./invoice-type-mgmt.component.css']
})
export class InvoiceTypeMgmtComponent implements OnInit {

  // VARIABLES
  columnList: any;
  wrapperItemList: WrapperInvoiceTypeListVM;
  getDataListVM: GetDataListVM;
  CurrentPageNo: number = 1;
  CurrentPageSize: number = 10;

  // CONSTRUCTOR
  constructor(private dialogService: DialogService,
    private baseService: BaseServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    this.wrapperItemList = new WrapperInvoiceTypeListVM();
    this.getDataListVM = new GetDataListVM();
  }
  // INIT
  ngOnInit(): void {
    this.columnList = [
      { field: 'Action', header: 'Action' },
      { field: 'Name', header: 'Name' }
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
    let URL: string = '';
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetInvoiceType;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.GetInvoiceType;
        break;
      case DB_OPERATION.UPDATE:
        URL = ApiUrl.UpdateInvoiceType + '/' + item.Id;
        break;
      case DB_OPERATION.DELETE:
        URL = ApiUrl.DeleteInvoiceType;
        break;
      default:
        break;
    }
    console.log(URL);
    this.baseService.set<WrapperInvoiceTypeListVM>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.TotalRecords = data.TotalRecords;
        this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
        this.baseService.LoaderOff();
      }
      );
  }

  // MODAL FUNCTION
  openModalAdd() {
    const ref = this.dialogService.open(AddInvoiceTypeComponent, {
      data: {

      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((item: any) => {
      if (item) {
        this.DoDBOperation(DB_OPERATION.CREATE, item);
      }
    });
  }
  openModalUpdate(item: any) {
    const ref = this.dialogService.open(EditInvoiceTypeComponent, {
      data: {
        modelData: item
      },
      header: 'Give necessary  info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
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


}
