import { Injectable } from '@angular/core';
import { LoginVM } from 'src/Modules/primary/domainModels/auth/LogInVM';
import { LoginResponseVM } from 'src/Modules/primary/domainModels/auth/LoginResponseVM';
import { RoleVM } from 'src/Modules/primary/domainModels/role/RoleVM';
import { FactoryVM } from 'src/Modules/primary/domainModels/factory/FactoryVM';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getFactoryId(): string {
    if (this.getLoginData().FactoryVM == undefined) {
      return '';
    }
    return this.getLoginData().FactoryVM.Id;
    //  return 'c90a9cdf-ca6b-4f74-b9f6-d00cd37b1b30';
  }
  getCurrentUserId(): string {
    return this.getLoginData().UserAuthInfoVM.Id;
    // return 'c60bffca-91d4-4116-b2c0-90fad213345d';
  }

  setLoginData(login: LoginResponseVM): void {
    localStorage.clear();
    console.log('--------Storage Cleared-------');
    console.log(this.getLoginData());
    localStorage.setItem("user", JSON.stringify(login));
    console.log('--------Newly LoggedIN-------');
    console.log(this.getLoginData());
  }
  getLoginData(): LoginResponseVM {
    return JSON.parse(localStorage.getItem("user")) == null ? new LoginResponseVM() : JSON.parse(localStorage.getItem("user"));
  }
  Logout(): void {
    localStorage.clear();
  }

  setRoleProfile(roleVm: RoleVM): void {
    let vm: LoginResponseVM = this.getLoginData();
    vm.RoleVM = roleVm;
    this.setLoginData(vm);
  }
  setFactory(factoryVm: FactoryVM): void {
    let vm: LoginResponseVM = this.getLoginData();
    vm.FactoryVM = factoryVm;
    this.setLoginData(vm);
  }

}
