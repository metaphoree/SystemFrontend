import { Component, OnInit } from '@angular/core';


import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-client-management-home',
  templateUrl: './client-management-home.component.html',
  styleUrls: ['./client-management-home.component.css'],
  providers: [DialogService]

})
export class ClientManagementHomeComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

}
