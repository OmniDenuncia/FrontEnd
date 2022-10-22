import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tip {
  slip: {
    id: number;
    advice: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private readonly url = 'https://api.adviceslip.com/advice';
  constructor(private http: HttpClient) { }

  public getTip(): Observable<Tip> {
    return this.http.get<Tip>(this.url);
  }
}
