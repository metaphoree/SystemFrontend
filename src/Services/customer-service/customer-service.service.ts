import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service/base-service.service';
import { AddCustomerViewModel } from 'src/Modules/primary/domainModels/AddCustomerViewModel';
import { ApiUrl } from '../RestUrls/api-url';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { WrapperListCustomerVM } from 'src/Modules/primary/domainModels/WrapperListCustomerVM';
import { ListCustomerVM } from 'src/Modules/primary/domainModels/ListCustomerVM';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private customer: AddCustomerViewModel = new AddCustomerViewModel('', '', '', '', '', '', 'c90a9cdf-ca6b-4f74-b9f6-d00cd37b1b30');

  constructor(private baseService: BaseServiceService) {

  }

  public setCustomer(customerModel: AddCustomerViewModel) {
    return this.baseService.setNo(ApiUrl.SetCustomer, customerModel);
  }
  public getAllCustomer(temp : GetDataListVM) {
    return this.baseService.set<WrapperListCustomerVM>(ApiUrl.GetCustomer, temp);
  }
  public updateCustomer(customerModel: ListCustomerVM) {
    return this.baseService.set<WrapperListCustomerVM>(ApiUrl.UpdateCustomer + '/' + customerModel.CustomerId, customerModel);
  }
  public deleteCustomer(customerModel: ListCustomerVM) {
    return this.baseService.set<WrapperListCustomerVM>(ApiUrl.DeleteCustomer, customerModel);
  }
}
