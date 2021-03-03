namespace messageSendBar {
  export interface BaseBarItem {
    barName: string,
    barType: string,
    barTitle: string,
    isShow: boolean,
    sendMsg?: unknown,
  }

  export enum SendMsg {

  }

  export interface SendBarList {
    barType: string,

  }

  type BarItemConstructor<T extends BarItem> = new (name: string) => T
  export abstract class BarItem {
    constructor(name: string) {
      this.name = name
    }
    name: string;
    sendMsg(name: string): this {
      console.log('this is sendMsg-log');
      return new (this.constructor as BarItemConstructor<this>)(name);
    }
  }

  // @某人
  export class sendPoint extends BarItem {
    
  }
  
}