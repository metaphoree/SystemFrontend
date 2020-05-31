import { FactoryVM } from "../factory/FactoryVM";
import { UserAuthInfoVM } from '../user-auth-info/UserAuthInfoVM';
import { RoleVM } from '../role/RoleVM';

export class LoginResponseVM
{
    UserAuthInfoVM: UserAuthInfoVM;
    FactoryVM: FactoryVM;
    RoleVM : RoleVM;
    LoginSuccess: boolean;
    ResponseMessage: string;
    AuthToken: string;
    Leader : boolean;

    constructor() {
        this.FactoryVM = new FactoryVM();
        this.UserAuthInfoVM = new UserAuthInfoVM();
        this.LoginSuccess = false;
        this.RoleVM = new RoleVM();
        this.ResponseMessage = "Login Failed";
        this.Leader = false;
    }
}