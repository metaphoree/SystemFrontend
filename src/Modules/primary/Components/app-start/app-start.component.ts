import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/Services/base-service/base-service.service';
import { Router, NavigationStart, NavigationEnd, NavigationError, Event, NavigationCancel } from '@angular/router';
import { RoleVM } from '../../domainModels/role/RoleVM';
import { ApiUrl } from 'src/Services/RestUrls/api-url';
import { GetDataListHistory } from '../../domainModels/history/GetDataListHistory';

@Component({
  selector: 'app-app-start',
  templateUrl: './app-start.component.html',
  styleUrls: ['./app-start.component.css']
})
export class AppStartComponent implements OnInit {

  message: string = '';
  showLoader: boolean = false;

  constructor(private baseService: BaseServiceService,
    private router: Router) {


    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        // alert('NavigationStart');
        // let getDataList = new GetDataListHistory();
        // getDataList.ClientId = this.baseService.getLoginData().UserAuthInfoVM.Id;
        // this.baseService.set<RoleVM>(ApiUrl.GetRoleByUserId, getDataList).subscribe(
        //   (data) => {
        //     this.baseService.setRoleProfile(data);
        //   }
        // );
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
    this.baseService.currentMessage.subscribe(message => {

      this.message = message
      if (this.message == 'SHOW_LOADER') {
        this.showLoader = true;
      }
      else {
        this.showLoader = false;
      }

    })
  }

}
