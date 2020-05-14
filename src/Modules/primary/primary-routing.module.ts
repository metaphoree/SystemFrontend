import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemManagementComponent } from './Components/Item/item-management/item-management.component';
import { ItemCategoryManagementComponent } from './Components/item-category/item-category-management/item-category-management.component';
import { StaffMgmtComponent } from './Components/staff/staff-mgmt/staff-mgmt.component';
import { SupplierMgmtComponent } from './Components/supplier/supplier-mgmt/supplier-mgmt.component';
import { StockMgmtComponent } from './Components/stock/stock-mgmt/stock-mgmt.component';
import { InvoiceTypeMgmtComponent } from './Components/invoice-type/invoice-type-mgmt/invoice-type-mgmt.component';
import { ExpenseTypeMgmtComponent } from './Components/expense-type/expense-type-mgmt/expense-type-mgmt.component';
import { IncomeTypeMgmtComponent } from './Components/income-type/income-type-mgmt/income-type-mgmt.component';
import { EquipmentMgmtComponent } from './Components/equipment/equipment-mgmt/equipment-mgmt.component';
import { EquipmentCategoryMgmtComponent } from './Components/equipment-category/equipment-category-mgmt/equipment-category-mgmt.component';
import { DepartmentMgmtComponent } from './Components/department/department-mgmt/department-mgmt.component';
import { ClientManagementHomeComponent } from './Components/customer/client-management-home/client-management-home.component';
import { ClientManagementComponent } from './Components/customer/client-management/client-management.component';
import { SalesHomeComponent } from './Components/sales/sales-home/sales-home.component';
import { PurchaseHomeComponent } from './Components/purchase/purchase-home/purchase-home.component';
import { PurchaseProductComponent } from './Components/purchase/purchase-product/purchase-product.component';
import { SaleProductComponent } from './Components/sales/sale-product/sale-product.component';
import { CustomerPaymentComponent } from './Components/customer/customer-payment/customer-payment.component';
import { CustomerHistoryComponent } from './Components/customer/customer-history/customer-history.component';
import { StaffHistoryComponent } from './Components/staff/staff-history/staff-history.component';
import { StaffPaymentComponent } from './Components/staff/staff-payment/staff-payment.component';
import { SupplierHistoryComponent } from './Components/supplier/supplier-history/supplier-history.component';
import { SupplierPaymentComponent } from './Components/supplier/supplier-payment/supplier-payment.component';
import { StaffProductionComponent } from './Components/staff/staff-production/staff-production.component';
import { StaffProductionHomeComponent } from './Components/staff/staff-production-home/staff-production-home.component';
import { CustomerPaymentHomeComponent } from './Components/customer/customer-payment-home/customer-payment-home.component';
import { StaffPaymentHomeComponent } from './Components/staff/staff-payment-home/staff-payment-home.component';
import { SupplierPaymentHomeComponent } from './Components/supplier/supplier-payment-home/supplier-payment-home.component';
import { PurchaseReturnComponent } from './Components/stock/purchase-return/purchase-return.component';
import { SalesReturnComponent } from './Components/stock/sales-return/sales-return.component';
import { ExpenseReportHomeComponent } from './Components/monthly-report/expense/expense-report-home/expense-report-home.component';
import { ExpenseReportComponent } from './Components/monthly-report/expense/expense-report/expense-report.component';
import { PayableReportComponent } from './Components/monthly-report/payable/payable-report/payable-report.component';
import { PayableReportHomeComponent } from './Components/monthly-report/payable/payable-report-home/payable-report-home.component';
import { RecievableReportHomeComponent } from './Components/monthly-report/recievable/recievable-report-home/recievable-report-home.component';
import { RecievableReportComponent } from './Components/monthly-report/recievable/recievable-report/recievable-report.component';
import { TransactionReportComponent } from './Components/monthly-report/transaction/transaction-report/transaction-report.component';
import { TransactionReportHomeComponent } from './Components/monthly-report/transaction/transaction-report-home/transaction-report-home.component';
import { ProductionReportHomeComponent } from './Components/monthly-report/production/production-report-home/production-report-home.component';
import { ProductionReportComponent } from './Components/monthly-report/production/production-report/production-report.component';
import { IncomeReportHomeComponent } from './Components/monthly-report/income/income-report-home/income-report-home.component';
import { IncomeReportComponent } from './Components/monthly-report/income/income-report/income-report.component';
import { IncomeMgmtComponent } from './Components/income/income-mgmt/income-mgmt.component';
import { ExpenseMgmtComponent } from './Components/expense/expense-mgmt/expense-mgmt.component';


const routes: Routes = [
  {
    path: 'client-mgmt-home',
    component: ClientManagementHomeComponent,
    children: [
      {
        path: 'client-mgmt',
        component: ClientManagementComponent,
        children: [
          {
            path: 'history',
            component: CustomerHistoryComponent
          },
          {
            path: 'payment',
            component: CustomerPaymentHomeComponent
          },
          {
            path: '',
            redirectTo: 'payment',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'client-mgmt',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'item-mgmt-home',
    component: ItemManagementComponent
  },
  {
    path: 'item-category-mgmt-home',
    component: ItemCategoryManagementComponent
  },
  {
    path: 'staff-mgmt-home',
    component: StaffMgmtComponent,
    children: [
      {
        path: 'history',
        component: StaffHistoryComponent
      },
      {
        path: 'payment',
        component: StaffPaymentHomeComponent
      },
      {
        path: 'production',
        component: StaffProductionHomeComponent
      },
      {
        path: '',
        redirectTo: 'payment',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'supplier-mgmt-home',
    component: SupplierMgmtComponent,
    children: [
      {
        path: 'history',
        component: SupplierHistoryComponent
      },
      {
        path: 'payment',
        component: SupplierPaymentHomeComponent
      },
      {
        path: '',
        redirectTo: 'payment',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'stock-mgmt-home',
    component: StockMgmtComponent,
    children: [
      {
        path: '',
        redirectTo: 'purchaseReturn',
        pathMatch: 'full'
      },
      {
        path: 'purchaseReturn',
        component: PurchaseReturnComponent

      }, {
        path: 'salesReturn',
        component: SalesReturnComponent
      }
    ]
  },
  {
    path: 'department-mgmt-home',
    component: DepartmentMgmtComponent
  },
  {
    path: 'equipment-category-mgmt-home',
    component: EquipmentCategoryMgmtComponent
  },
  {
    path: 'equipment-mgmt-home',
    component: EquipmentMgmtComponent
  },
  {
    path: 'income-type-mgmt-home',
    component: IncomeTypeMgmtComponent
  },
  {
    path: 'expense-type-mgmt-home',
    component: ExpenseTypeMgmtComponent
  },
  {
    path: 'invoice-type-mgmt-home',
    component: InvoiceTypeMgmtComponent
  },
  {
    path: 'purchase-mgmt',
    component: PurchaseHomeComponent,
    children: [
      {
        path: '',
        component: PurchaseProductComponent
      },
      {
        path: 'purchase-product',
        component: PurchaseProductComponent
      }
    ]
  },
  {
    path: 'sales-mgmt',
    component: SalesHomeComponent,
    children: [
      {
        path: '',
        component: SaleProductComponent
      },
      {
        path: 'sales-product',
        component: SaleProductComponent
      }
    ]
  },
  {
    path: 'expense-report-home',
    component: ExpenseReportHomeComponent,
    children: [
      {
        path: '',
        component: ExpenseReportComponent
      },
      {
        path: 'expense-report',
        component: ExpenseReportComponent
      }
    ]
    },
    {
      path: 'payable-report-home',
      component: PayableReportHomeComponent,
      children: [
        {
          path: '',
          component: PayableReportComponent
        },
        {
          path: 'payable-report',
          component: PayableReportComponent
        }
      ]
    },
    {
      path: 'recievable-report-home',
      component: RecievableReportHomeComponent,
      children: [
        {
          path: '',
          component: RecievableReportComponent
        },
        {
          path: 'recievable-report',
          component: RecievableReportComponent
        }
      ]
    },
    {
      path: 'transaction-report-home',
      component: TransactionReportHomeComponent,
      children: [
        {
          path: '',
          component: TransactionReportComponent
        },
        {
          path: 'transaction-report',
          component: TransactionReportComponent
        }
      ]
    },
    {
      path: 'production-report-home',
      component: ProductionReportHomeComponent,
      children: [
        {
          path: '',
          component: ProductionReportComponent
        },
        {
          path: 'production-report',
          component: ProductionReportComponent
        }
      ]
    },
    {
      path: 'income-report-home',
      component: IncomeReportHomeComponent,
      children: [
        {
          path: '',
          component: IncomeReportComponent
        },
        {
          path: 'income-report',
          component: IncomeReportComponent
        }
      ]
    },
    {
      path: 'income-mgmt',
      component: IncomeMgmtComponent
    },
    {
      path: 'expense-mgmt',
      component: ExpenseMgmtComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryRoutingModule { }
