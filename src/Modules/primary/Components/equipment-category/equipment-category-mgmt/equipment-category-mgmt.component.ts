import { Component, OnInit } from '@angular/core';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { DialogService } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { WrapperEquipmentCategoryListVM } from 'src/Modules/primary/domainModels/equipment-category/WrapperEquipmentCategoryListVM';
import { AddEquipmentCategoryComponent } from '../add-equipment-category/add-equipment-category.component';
import { EditEquipmentCategoryComponent } from '../edit-equipment-category/edit-equipment-category.component';

@Component({
  selector: 'app-equipment-category-mgmt',
  templateUrl: './equipment-category-mgmt.component.html',
  styleUrls: ['./equipment-category-mgmt.component.css']
})
export class EquipmentCategoryMgmtComponent implements OnInit {

// VARIABLES
columnList: any;
wrapperItemList: WrapperEquipmentCategoryListVM;
getDataListVM: GetDataListVM;
CurrentPageNo: number = 1;
CurrentPageSize: number = 10;

// CONSTRUCTOR
constructor(private dialogService: DialogService,
  private baseService: BaseServiceService,
  private messageService: MessageService,
  private confirmationService: ConfirmationService) {
  this.wrapperItemList = new WrapperEquipmentCategoryListVM();
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
  this.baseService.LoaderOn();
  switch (operationType) {
    case DB_OPERATION.CREATE:
      URL = ApiUrl.SetEquipmentCategory;
      break;
    case DB_OPERATION.READ:
      URL = ApiUrl.GetEquipmentCategory;
      break;
    case DB_OPERATION.UPDATE:
      URL = ApiUrl.UpdateEquipmentCategory + '/' + item.Id;
      break;
    case DB_OPERATION.DELETE:
      URL = ApiUrl.DeleteEquipmentCategory;
      break;
    default:
      break;
  }
  console.log(URL);
  this.baseService.set<WrapperEquipmentCategoryListVM>(URL, item)
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
  const ref = this.dialogService.open(AddEquipmentCategoryComponent, {
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
  const ref = this.dialogService.open(EditEquipmentCategoryComponent, {
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
