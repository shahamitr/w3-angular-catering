import { Component } from '@angular/core';
import {MenuService} from '../menu.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public menu;
  constructor(private menuService: MenuService){
    this.menu = menuService.getMenus();
  }
}
