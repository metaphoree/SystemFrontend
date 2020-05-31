import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { MessageService } from 'primeng/api';
import { WrapperItemListVM } from '../../domainModels/item/WrapperItemListVM';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { GetDataListVM } from '../../domainModels/GetDataListVM';
import { SessionService } from 'src/Services/session-service/session.service';
import { LoginResponseVM } from '../../domainModels/auth/LoginResponseVM';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  loginResponse : LoginResponseVM;
  factoryName : string;
  constructor(    private baseService : BaseServiceService,
    private messageService : MessageService,
    private session : SessionService) { 


      this.loginResponse = new LoginResponseVM();
      this.loginResponse = this.baseService.getLoginData();
      this.factoryName = this.loginResponse.FactoryVM.Name;
    }

  ngOnInit(): void {

    let model = new GetDataListVM();
    model.FactoryId = this.session.getFactoryId();
    model.PageNumber=1;
    model.PageSize=10;
    this.baseService.set<WrapperItemListVM>(ApiUrl.GetItem,model).subscribe(
(data) => {

this.baseService.LoaderOff();
}


    );
  }

}
