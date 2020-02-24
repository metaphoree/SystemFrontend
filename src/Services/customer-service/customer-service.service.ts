import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service/base-service.service';
import { AddCustomerViewModel } from 'src/Modules/primary/domainModels/AddCustomerViewModel';
import { ApiUrl } from '../RestUrls/api-url';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private customer: AddCustomerViewModel = new AddCustomerViewModel('', '', '', '', '', '', 'c90a9cdf-ca6b-4f74-b9f6-d00cd37b1b30');

  constructor(private baseService: BaseServiceService) {

  }

  public setCustomer(customerModel: AddCustomerViewModel) {
    customerModel.FactoryId = 'c90a9cdf-ca6b-4f74-b9f6-d00cd37b1b30';
    return this.baseService.setNo(ApiUrl.SetCustomer, customerModel);
  }
  public getAllCustomer(FactoryId: string) {
    this.customer.FactoryId = 'c90a9cdf-ca6b-4f74-b9f6-d00cd37b1b30';
    return this.baseService.set<AddCustomerViewModel[]>(ApiUrl.GetCustomer, this.customer);
  }

}
