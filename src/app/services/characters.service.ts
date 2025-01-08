import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, Character } from '../models/apiResponse';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<ApiResponse> {
    const url = `${this.url}characters`;
    console.log(url);
    return this.http.get<ApiResponse>(url);
  }

  getCharacterById(id: string): Observable<Character> {
    const url = `${this.url}characters/${id}`;
    console.log(url);
    return this.http.get<Character>(url);
  }
}
