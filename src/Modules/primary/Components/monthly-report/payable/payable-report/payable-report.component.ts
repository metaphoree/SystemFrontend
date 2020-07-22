import { Component, OnInit } from '@angular/core';
import { WrapperMonthPayableListVM } from 'src/Modules/primary/domainModels/monthly-report/payable/WrapperMonthPayableListVM';
import { MonthlyReport } from 'src/Modules/primary/domainModels/monthly-report/MonthlyReport';
import { UtilService } from 'src/Services/util-service/util.service';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';
import { SessionService } from 'src/Services/session-service/session.service';
import { DB_OPERATION } from 'src/AppUtils/AppConstant/app-constant';
import { ApiUrl } from 'src/Services/RestUrls/api-url';

@Component({
  selector: 'app-payable-report',
  templateUrl: './payable-report.component.html',
  styleUrls: ['./payable-report.component.css']
})
export class PayableReportComponent implements OnInit {

  getDataListVM: MonthlyReport;
  MonthList: any;
  selectedMonth: any;
  columnList: any;
  CurrentPageNo: number = 1;
  CurrentPageSize: number = 10;
  wrapperItemList: WrapperMonthPayableListVM;
  totalAmount: number;
  constructor(private util: UtilService,
    private baseService: BaseServiceService,
    private messageService: MessageService,
    private sessionService: SessionService) {

    this.wrapperItemList = new WrapperMonthPayableListVM();
    this.getDataListVM = new MonthlyReport();
  }

  ngOnInit(): void {
    this.MonthList = this.util.getMonthList();
    this.GetInitialData();
    this.columnList = [
      // { field: 'Action', header: 'Action', fieldType: 'icon' },
       { field: 'ClientName', header: 'ClientName', fieldType: 'string' },
      { field: 'Month', header: 'Month', fieldType: 'string' },
      { field: 'Purpose', header: 'Purpose', fieldType: 'string' },
      { field: 'Amount', header: 'Amount', fieldType: 'number' },
      { field: 'CreatedDateTime', header: 'CreatedDateTime', fieldType: 'date' }
    ];
    this.Search();
  }


  Refresh(): void {
    this.MonthSelectedManual();
  }

  Search(): void {
    this.getDataListVM.FactoryId = this.sessionService.getFactoryId();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 20;
    this.getDataListVM.Month = this.selectedMonth;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);

  }
  MonthSelected($event): void {
    this.getDataListVM.FactoryId = this.sessionService.getFactoryId();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 20;
    this.getDataListVM.Month = this.selectedMonth;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
  }
  MonthSelectedManual(): void {
    this.getDataListVM.FactoryId = this.sessionService.getFactoryId();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 20;
    this.getDataListVM.Month = this.selectedMonth;
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
  }

  public GetInitialData(): void {
    this.getDataListVM.FactoryId = this.sessionService.getFactoryId();
    this.getDataListVM.PageNumber = 1;
    this.getDataListVM.PageSize = 20;
    this.getDataListVM.Month = this.util.getCurrentMonth();
    this.DoDBOperation(DB_OPERATION.READ, this.getDataListVM);
  }
  // DB OPERATION FUNCTION
  public DoDBOperation(operationType: DB_OPERATION, item: any): void {
    let URL: string = '';
    switch (operationType) {
      case DB_OPERATION.CREATE:
        URL = ApiUrl.SetItem;
        break;
      case DB_OPERATION.READ:
        URL = ApiUrl.MonthlyPayable;
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
    this.baseService.set<WrapperMonthPayableListVM>(URL, item)
      .subscribe((data) => {
        this.wrapperItemList.ListOfData = data.ListOfData;
        this.wrapperItemList.ListOfData[this.wrapperItemList.ListOfData.length - 1].Purpose = "Total Amount : ";
        this.totalAmount = this.wrapperItemList.ListOfData[this.wrapperItemList.ListOfData.length - 1].Amount;
        this.wrapperItemList.ListOfData[this.wrapperItemList.ListOfData.length - 1].CreatedDateTime = new Date();
        this.wrapperItemList.TotalRecords = data.TotalRecords;
        this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
     
     
     
        this.wrapperItemList.Total_TillNow = data.Total_TillNow;
        this.wrapperItemList.Total_Monthly = data.Total_Monthly;
        this.baseService.LoaderOff();
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

}
