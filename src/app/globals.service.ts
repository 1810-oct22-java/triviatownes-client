import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  private category: String;
  private apiUrl: String = 'http://localhost:8080/TriviaTownesServer/';

  constructor() { }

  public getCategory(): String {
    return this.category;
  }

  public setCategory(category: String): void {
    this.category = category;
  }

  public getApiUrl(): String {
    return this.apiUrl;
  }
}
