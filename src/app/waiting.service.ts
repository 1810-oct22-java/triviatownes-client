import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaitingService {

  private playerName: string;
  private apiUrl: string = "http://localhost:8081/spring-mvc/users";
  constructor(name: string) { 
    this.playerName = name;
  }

  public getPlayerName(): string {
    return this.playerName;
  }

  public setPlayerName(name: string): void {
    this.playerName = name;
  }

  public getApiUrl(): string {
    return this.apiUrl;
  }
}
