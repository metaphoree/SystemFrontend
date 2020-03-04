import { Injectable } from '@angular/core';
import { DDModel } from 'src/Models/Utils/DDModel';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {


  }

  public convertToDropdownModel(arr: any[], propertyNames: string[],titleValue: string ): DDModel[] {

    let outputArr: DDModel[] = [{label: titleValue,value:null}];
    
    for (let i = 0; i < arr.length; i++) {
      let temp = new DDModel(arr[i][propertyNames[0]], arr[i][propertyNames[1]]);
      outputArr.push(temp);
      // for (let key in propertyNames) {
      //   if (arr[i].hasOwnProperty(key)) {
      //     let element = arr[i][key];

      //   }
      // }
    }
    return outputArr;
  }

}
