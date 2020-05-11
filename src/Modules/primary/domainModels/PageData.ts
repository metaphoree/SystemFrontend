import { DDModelVMs_ } from './DDModelVMs';
import { InitialLoadDataVM } from './InitLoadDataVM';

export class PageData {
    //ddModelVms: DDModelVMs_;
    ddModelVmsPageSpecific: DDModelVMs_;
    initLoadDataVM: InitialLoadDataVM;
    ddModelVms : DDModelVMs_;
    constructor() {
      //  this.ddModelVmsNotPageSpecific = new DDModelVMs_();
        this.ddModelVmsPageSpecific = new DDModelVMs_();
        this.initLoadDataVM = new InitialLoadDataVM();
        this.ddModelVms = new DDModelVMs_();
    }
}