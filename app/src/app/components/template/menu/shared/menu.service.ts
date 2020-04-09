import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from 'src/app/app.constants';
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor(private http: HttpClient) { }

  setMenu(menu: Menu[]) {
    localStorage.setItem('ebsaMenu', JSON.stringify(menu));
  }

  getMenus(): Observable<any> {
    return this.http.get(URL.API + 'grupo/menus');
  }

  getMenu(){
    return JSON.parse(localStorage.getItem('ebsaMenu'))
  }

  setMenuActive(url: string) {
    localStorage.setItem('ebsaMenuActive', JSON.stringify(url));
  }

  getMenuActive(){
    return JSON.parse(localStorage.getItem('ebsaMenuActive'));
  }
}
