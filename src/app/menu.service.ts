import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus(){
    return {
      "home":"Home",
      "services": "Services",
      "contact": "Contact",
      "investors": "Investors"
    }
  }
}
