import { Component, OnInit } from '@angular/core';
import { AddCustomerViewModel } from '../../domainModels/AddCustomerViewModel';
import { CustomerServiceService } from 'src/Services/customer-service/customer-service.service';
import { GetDataListVM } from '../../domainModels/GetDataListVM';
import { SessionService } from 'src/Services/session-service/session.service';
import { DialogService } from 'primeng/dynamicdialog';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { MessageService } from 'primeng/api';
import { ListCustomerVM } from '../../domainModels/ListCustomerVM';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
  providers: [DialogService, MessageService]
})
export class ClientManagementComponent implements OnInit {

  viewModel: AddCustomerViewModel;
  listVM: Array<AddCustomerViewModel>;

  // Table 
  totalRecords: number;
  cols: any[];
  loading: boolean;
  PageSize: number = 10;
  // frozenCols : any[];
first : number = 0;
  constructor(private customerService: CustomerServiceService,
    private sessionService: SessionService,
    private dialogService: DialogService,
    private messageService: MessageService) {
    this.viewModel = new AddCustomerViewModel('', '', '', '', '', '', '');
    //this.listVM = new Array<AddCustomerViewModel>(1000);
  }

  ngOnInit(): void {
    this.GetAllCustomer(10, 1, null);
    // Table 
    this.cols = [
      { field: 'button', header: 'Edit' },
      { field: 'button', header: 'Delete' },
      { field: 'Name', header: 'Name' },
      { field: 'Email', header: 'Email' },
      { field: 'PermanentAddress', header: 'PermanentAddress' },
      { field: 'PresentAddress', header: 'PresentAddress' },
      { field: 'CellNo', header: 'CellNo' },
      { field: 'AlternateCellNo', header: 'AlternateCellNo' }
     
    ];
    //   this.frozenCols = [

    // ];
  }
reset() : void {

  this.first = 0;
}
  AddCustomer(event): void {
    this.openModalAddCustomer();
  }
  GetAllCustomer(pageSize: number, pageNumber: number, globalFilter: string): void {
    // session management 
    let temp: GetDataListVM = new GetDataListVM();
    temp.FactoryId = this.sessionService.getFactoryId();
    temp.PageNumber = pageNumber;
    temp.PageSize = pageSize;
    temp.GlobalFilter = globalFilter;
    this.customerService.getAllCustomer(temp)
      .subscribe((data) => {
        this.listVM = data.CustomerList;
        this.totalRecords = data.TotalRecoreds;
        console.log(data);
        console.log(this.listVM);
        this.messageService.add({severity:'success', summary: 'Well Done', detail:'Operation Successfull'});
      });
  }
  loadDataLazy(event): void {
    console.log(event);
    //event.first = First row offset
    //event.rows = 5;
    //event.sortField = Field name to sort in single sort mode
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec in single sort mode
    //multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.
    //filters: Filters object having field as key and filter value, filter matchMode as value
    //globalFilter: Value of the global filter if available
    //this.cars = do a request to a remote datasource using a service and return the cars that match the lazy load criteria
    //this.listVM = 
    let pageNumberTemp = event.first == 0 ? 1 : 1 + (event.first / this.PageSize);
    this.GetAllCustomer(this.PageSize, pageNumberTemp, event.globalFilter);
  }

  Modify(event, operationType, entity): void {
    console.log(operationType);
    console.log(entity);
    console.log(event);
    if (operationType == 'Edit') {
      this.openModal(entity);
      // messageService.
    }
    if (operationType == 'Delete') {
      this.customerService.deleteCustomer(entity)
        .subscribe((data) => {
          this.listVM = data.CustomerList;
          this.totalRecords = data.TotalRecoreds;
          console.log(data);
          console.log(this.listVM);

        });
    }
  }
  openModal(customerObj: ListCustomerVM) {
    
    const ref = this.dialogService.open(EditCustomerComponent, {
      data: {
        modelData: customerObj
      },
      header: 'Give necessary client info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref.onClose.subscribe((customer: ListCustomerVM) => {
      if (customer) {
        this.customerService.updateCustomer(customer)
          .subscribe((data) => {
            this.listVM = data.CustomerList;
            this.totalRecords = data.TotalRecoreds;
            console.log(data);
            console.log(this.listVM);
          });
        //console.log(customer);
        // this.messageService.add({severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin});
      }
    });
  }
  openModalAddCustomer() {
    
    const ref1 = this.dialogService.open(AddCustomerComponent, {
    
      header: 'Give necessary client info',
      width: '70%',
      height: '90%',
      footer: "This is footer"
    });
    ref1.onClose.subscribe((customer: AddCustomerViewModel) => {
      if (customer) {
        customer.FactoryId = this.sessionService.getFactoryId();
        this.customerService.setCustomer(customer).
          subscribe((data: any) => {
            this.listVM = data.CustomerList;
        this.totalRecords = data.TotalRecoreds;
            // this.GetAllCustomer(10, 1, null);
            // console.log(this.listVM);
          });
    
        //console.log(customer);
      
      }
    });
  }



}
