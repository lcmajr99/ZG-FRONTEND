import { Link } from './../models/link.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {}

  encurtaLink(link: Link): Observable<Link>{
    return this.httpClient.post<Link>(this.url,link);
  }
  listaLinks(): Observable<Link[]>{
    return this.httpClient.get<Link[]>(this.url);
  }




}
