import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  navigate(url: string): void {
    window.location.href = url;
  }
}
