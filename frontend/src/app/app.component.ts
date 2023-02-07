import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './core/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  title = 'haccp';
  showCookiePolicy:boolean=false;
  constructor(private readonly loaderService: LoaderService) {
    var myCookie = this.getCookie("cookie_policy");
    console.log(myCookie);
    if(myCookie){
      this.showCookiePolicy = false;
    }else{
      this.showCookiePolicy = true;
    }

  }

  accepCookie(){
    document.cookie = "cookie_policy=true"
    this.showCookiePolicy=false;
  }

  private getCookie(name:string) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    var end;
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
} 
}
