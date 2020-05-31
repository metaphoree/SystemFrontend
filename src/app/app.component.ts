import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SyetemFrontend';
  blockTheUI : boolean = false;
  showLoadingSpinner : boolean = false;
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
                { label: 'Login Demo', icon: 'pi pi-fw pi-user-plus', routerLink: 'login' },
                { label: 'Client Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'client-mgmt-home' }, // Sales
                { label: 'Item Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'item-mgmt-home' }, // Inventory // Production
                { label: 'Item Category Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'item-category-mgmt-home' },// Inventory  // Production
                { label: 'Staff  Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'staff-mgmt-home' }, // Production //  // Production
                { label: 'Supplier Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'supplier-mgmt-home' },// Purchase
                { label: 'Stock Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'stock-mgmt-home' }, // Inventory  // Production
                { label: 'Department Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'department-mgmt-home' }, // Settings
                { label: 'Equipment Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'equipment-mgmt-home' }, // Settings
                { label: 'Equipment Category Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'equipment-category-mgmt-home' }, // Settings
                { label: 'Invoice Type Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'invoice-type-mgmt-home' }, // Settings
                { label: 'Income Type Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'income-type-mgmt-home' }, // Settings
                { label: 'Expense Type Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'expense-type-mgmt-home' }, // Settings
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
          { label: 'Factory Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'factory-mgmt' },   // Super Admin // Separate Menu
          { label: 'Payment Status Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'payment-status-mgmt' },  // Settings
          { label: 'Item Status Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'item-status-mgmt' }, // Settings
          { label: 'Income Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'income-mgmt' }, // Separate
          { label: 'Expense Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'expense-mgmt' },// Separate
          { label: 'Purchase Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'purchase-mgmt' }, // Purchase
          { label: 'Sales Mgmt', icon: 'pi pi-fw pi-user-plus', routerLink: 'sales-mgmt' } // Sales
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
