import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TituloDoSite } from './titulo-do-site';

@Injectable({
  providedIn: 'root'
})
export class TituloDoSiteService {

  private baseUrl = "http://localhost:8080/mostrarOsTitulos";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<TituloDoSite[]>{
    return this.http.get<TituloDoSite[]>(`${this.baseUrl}`); 
    }
}
