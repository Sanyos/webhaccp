import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';

@Injectable({
  providedIn: 'root',
})
export class HaccpCategoryService {
  private haccpCategorySource =
    new BehaviorSubject<CompanyCategoryTypes | null>(null);
  haccpCategory$ = this.haccpCategorySource.asObservable();

  constructor() {}

  setHaccpCategory(category: CompanyCategoryTypes) {
    this.haccpCategorySource.next(category);
  }
}
