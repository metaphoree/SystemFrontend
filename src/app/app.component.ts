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
                { label: 'Department Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'department-mgmt-home' },
                { label: 'Equipment Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'equipment-mgmt-home' },
                { label: 'Equipment Category Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'equipment-category-mgmt-home' },
                { label: 'Invoice Type Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'invoice-type-mgmt-home' },
                { label: 'Income Type Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'income-type-mgmt-home' },
                { label: 'Expense Type Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'expense-type-mgmt-home' },
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
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
          { label: 'Purchase Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'purchase-mgmt' },
          { label: 'Sales Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'sales-mgmt' }
        ]
      },
      {
        label: 'Monthly Report',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Expense Report',
            icon: 'pi pi-pi pi-search',
            routerLink: 'expense-report-home'
          },
          {
            label: 'Production Report',
            icon: 'pi pi-pi pi-search',
            routerLink: 'production-report-home'
          },
          {
            label: 'Income Report',
            icon: 'pi pi-pi pi-search',
            routerLink: 'income-report-home'
          },
          {
            label: 'Payable Report',
            icon: 'pi pi-pi pi-search',
            routerLink: 'payable-report-home'
          },
          {
            label: 'Recievable Report',
            icon: 'pi pi-pi pi-search',
            routerLink: 'recievable-report-home'
          },
          {
            label: 'Account Report',
            icon: 'pi pi-pi pi-search',
            routerLink: 'transaction-report-home'
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
