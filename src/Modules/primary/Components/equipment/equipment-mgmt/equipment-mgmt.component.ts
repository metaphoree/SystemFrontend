import { Component, OnInit } from '@angular/core';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { DialogService } from 'primeng/dynamicdialog';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { WrapperEquipmentListVM } from 'src/Modules/primary/domainModels/equipment/WrapperEquipmentListVM';
import { AddEquipmentComponent } from '../add-equipment/add-equipment.component';
import { EditEquipmentComponent } from '../edit-equipment/edit-equipment.component';
import { WrapperEquipmentCategoryListVM } from 'src/Modules/primary/domainModels/equipment-category/WrapperEquipmentCategoryListVM';
import { EquipmentCategoryVM } from 'src/Modules/primary/domainModels/equipment-category/EquipmentCategoryVM';

@Component({
  selector: 'app-equipment-mgmt',
  templateUrl: './equipment-mgmt.component.html',
  styleUrls: ['./equipment-mgmt.component.css']
})
export class EquipmentMgmtComponent implements OnInit {

// VARIABLES
columnList: any;
wrapperItemList: WrapperEquipmentListVM;
getDataListVM: GetDataListVM;
CurrentPageNo: number = 1;
CurrentPageSize: number = 10;

// Initial data Carrier
equipmentCategoryList : EquipmentCategoryVM[];


// CONSTRUCTOR
constructor(private dialogService: DialogService,
  private baseService: BaseServiceService,
  private messageService: MessageService,
  private confirmationService: ConfirmationService) {
  this.wrapperItemList = new WrapperEquipmentListVM();
  this.getDataListVM = new GetDataListVM();
}
// INIT
ngOnInit(): void {
  this.columnList = [
    { field: 'Action', header: 'Action' },
    { field: 'Name', header: 'Name' },
    { field: 'Price', header: 'Price' },
    { field: 'Description', header: 'Description' },
    { field: 'EquipmentCategoryName', header: 'EquipmentCategoryName' }

  ];
  this.getDataListVM.PageNumber = 1;
  this.getDataListVM.PageSize = 10;
  this.GetInitialData();
  this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
}


// Initial Data
GetInitialData() : void{
  this.getDataListVM = new GetDataListVM();
  this.getDataListVM.PageNumber = 1;
  this.getDataListVM.PageSize = 100;

  this.baseService.set<WrapperEquipmentCategoryListVM>(ApiUrl.GetEquipmentCategory, this.getDataListVM)
    .subscribe((data) => {
      this.equipmentCategoryList = data.ListOfData;
      console.log(this.equipmentCategoryList);
    });
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
      URL = ApiUrl.SetEquipment;
      break;
    case DB_OPERATION.READ:
      URL = ApiUrl.GetEquipment;
      break;
    case DB_OPERATION.UPDATE:
      URL = ApiUrl.UpdateEquipment + '/' + item.Id;
      break;
    case DB_OPERATION.DELETE:
      URL = ApiUrl.DeleteEquipment;
      break;
    default:
      break;
  }
  this.baseService.LoaderOn();
  console.log(URL);
  this.baseService.set<WrapperEquipmentListVM>(URL, item)
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
  const ref = this.dialogService.open(AddEquipmentComponent, {
    data: {
equipmentCategoryList : this.equipmentCategoryList
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
  const ref = this.dialogService.open(EditEquipmentComponent, {
    data: {
      modelData: item,
      equipmentCategoryList : this.equipmentCategoryList
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
