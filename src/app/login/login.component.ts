import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { LoginResponseVM } from 'src/Modules/primary/domainModels/auth/LoginResponseVM';
import { LoginVM } from 'src/Modules/primary/domainModels/auth/LogInVM';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { SessionService } from 'src/Services/session-service/session.service';
import { Router } from '@angular/router';
import { FactoryVM } from 'src/Modules/primary/domainModels/factory/FactoryVM';
import { WrapperFactoryListVM } from 'src/Modules/primary/domainModels/factory/WrapperFactoryListVM';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { DDModelVMs_ } from 'src/Modules/primary/domainModels/DDModelVMs';
import { UtilService } from 'src/Services/util-service/util.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  wrapperItemList: WrapperFactoryListVM;
  loginResponse: LoginResponseVM;
  userName: string = '';
  password: string = '';
  selectedFactory: FactoryVM;
  getDataListVM: GetDataListVM;
  ddModel: DDModelVMs_;

  constructor(private baseService: BaseServiceService,
    private router: Router,
    private util: UtilService) {
    this.loginResponse = new LoginResponseVM();
    this.selectedFactory = new FactoryVM();
    this.wrapperItemList = new WrapperFactoryListVM();
    this.getDataListVM = new GetDataListVM();
    this.ddModel = new DDModelVMs_();
  }

  ngOnInit(): void {
  }


  Login(): void {
    let login = new LoginVM();
    login.Password = this.password;
    login.UserName = this.userName;

    this.baseService.set<LoginResponseVM>(ApiUrl.Login, login).subscribe(
      (data) => {
        this.loginResponse = data;

        this.baseService.setLoginData(this.loginResponse);
      
      
        if (this.loginResponse.LoginSuccess) {
          // window.location.href = "home/staff-mgmt-home/payment";
          // this.router.navigate(['home/staff-mgmt-home/payment']);
          if (!this.loginResponse.Leader) {
            window.location.href = "home/dashboard";
          } 
          
          
          
          else if (this.loginResponse.Leader) {

            this.getDataListVM.PageNumber = 1;
            this.getDataListVM.PageSize = 100;
            this.baseService.set<WrapperFactoryListVM>(ApiUrl.GetFactory, this.getDataListVM)
              .subscribe((data) => {
                this.wrapperItemList.ListOfData = data.ListOfData;
                this.wrapperItemList.TotalRecords = data.TotalRecords;

                this.ddModel.FactoryVMs = this.util.convertToDDM_ValueAsObject(this.wrapperItemList.ListOfData, ['Name', 'Id'], "As Super Admin Please Select Factory to Login")
                // this.messageService.add({ severity: 'success', summary: 'Well Done', detail: 'Operation Successfull' });
                this.baseService.LoaderOff();
              }
              );

          }
      
          // window.location.reload();
        }

        console.log(this.loginResponse);
      }
    );
  }


  FactorySelected(event): void {
    this.selectedFactory = event.value;
    if(this.baseService.isValidString(this.selectedFactory.Id)){
      this.baseService.setFactory(this.selectedFactory);
      window.location.href = "home/dashboard";
    }
  }


}
