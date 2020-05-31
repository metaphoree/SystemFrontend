import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { WrapperFactoryListVM } from '../../domainModels/factory/WrapperFactoryListVM';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { LoginResponseVM } from '../../domainModels/auth/LoginResponseVM';
import { RoleVM } from '../../domainModels/role/RoleVM';
import { Router, NavigationStart, NavigationEnd, NavigationError, Event, NavigationCancel } from '@angular/router';
import { GetDataListHistory } from '../../domainModels/history/GetDataListHistory';

@Component({
  selector: 'app-side-menu-horizontal',
  templateUrl: './side-menu-horizontal.component.html',
  styleUrls: ['./side-menu-horizontal.component.css']
})
export class SideMenuHorizontalComponent implements OnInit {


  loginResponse: LoginResponseVM;
  roleVM: RoleVM;
  constructor(private baseService: BaseServiceService,
    private router: Router) {
    this.loginResponse = new LoginResponseVM();
    this.loginResponse = this.baseService.getLoginData();
    this.roleVM = this.loginResponse.RoleVM;
    console.log('-------------------------------')
    console.log(this.roleVM);
    console.log(this.loginResponse);



    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        // alert('NavigationStart');
        let getDataList = new GetDataListHistory();
        getDataList.ClientId = this.baseService.getLoginData().UserAuthInfoVM.Id;
        this.baseService.set<RoleVM>(ApiUrl.GetRoleByUserId, getDataList).subscribe(
          (data) => {
            this.baseService.setRoleProfile(data);
            this.roleVM = data;
          }
        );
      }
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        //alert('NavigationEnd');
      }
      if (event instanceof NavigationCancel) {
        // Hide loading indicator
        //alert('NavigationCancel');
      }
      if (event instanceof NavigationError) {
        // Hide loading indicator
        //alert('NavigationError');

        // Present error to user
        //console.log(event.error);
      }
    });








  }

  ngOnInit(): void {
  }


  Logout(): void {
    this.baseService.Logout();
    window.location.href = '';
    // this.baseService.set<WrapperFactoryListVM>(ApiUrl.GetFactory,
    //   (data) => {


    // });
  }
}
