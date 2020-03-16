import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SyetemFrontend';
  display = true;
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Factory Mgmt',
        icon: 'pi pi-pw pi-file',
        items:
          [{
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items:
              [
                { label: 'Client Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'client-mgmt-home' },
                { label: 'Item Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'item-mgmt-home' },
                { label: 'Item Category Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'item-category-mgmt-home' },
                { label: 'Staff  Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'staff-mgmt-home' },
                { label: 'Supplier Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'supplier-mgmt-home' },
                { label: 'Stock Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'stock-mgmt-home' },
                { label: 'Filter', icon: 'pi pi-fw pi-filter' }
              ]
          },
          { label: 'Open', icon: 'pi pi-fw pi-external-link' },
          { separator: true },
          { label: 'Quit', icon: 'pi pi-fw pi-times' }
          ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      }
    ];


  }
}
