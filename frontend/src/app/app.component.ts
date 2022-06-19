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
  constructor(private readonly loaderService: LoaderService) {}
}
