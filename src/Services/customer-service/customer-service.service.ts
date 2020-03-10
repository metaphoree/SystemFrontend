import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service/base-service.service';
import { ApiUrl } from '../RestUrls/api-url';
import { GetDataListVM } from 'src/Modules/primary/domainModels/GetDataListVM';
import { WrapperListCustomerVM } from 'src/Modules/primary/domainModels/WrapperListCustomerVM';
import { CustomerVM } from 'src/Modules/primary/domainModels/CustomerVM';
import { SessionService } from '../session-service/session.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private customer: CustomerVM = new CustomerVM();

  constructor(private baseService: BaseServiceService,private sessionService : SessionService) {
this.customer.FactoryId = sessionService.getFactoryId();
  }

  public setCustomer(customerModel: CustomerVM) {
    return this.baseService.setNo(ApiUrl.SetCustomer, customerModel);
  }
  public getAllCustomer(temp : GetDataListVM) {
    return this.baseService.set<WrapperListCustomerVM>(ApiUrl.GetCustomer, temp);
  }
  public updateCustomer(customerModel: CustomerVM) {
    return this.baseService.set<WrapperListCustomerVM>(ApiUrl.UpdateCustomer + '/' + customerModel.CustomerId, customerModel);
  }
  public deleteCustomer(customerModel: CustomerVM) {
    return this.baseService.set<WrapperListCustomerVM>(ApiUrl.DeleteCustomer, customerModel);
  }
}
