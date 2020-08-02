import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * 检测Str 是否存在后面参数列表
   * @param findStr 
   * @param array 
   */
  public isInStrItem(findStr: any, ...array: any) {
    findStr = [findStr].join('');
    for (let i = 0; i < array.length; i++) {
      if ([array[i]].join('') == findStr) {
        return true;
      }
    }
    return false;
  };
}
