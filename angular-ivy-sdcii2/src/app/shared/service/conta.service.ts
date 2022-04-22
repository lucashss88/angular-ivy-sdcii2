import { Injectable } from '@angular/core';
import { Conta } from '../model/conta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  
  URL_CONTAS = 'http://localhost:3000/contas';
  contas: Array<Conta>;

  constructor(private httpClient: HttpClient) {}

  listar(): Array<Conta> {
    //return this.httpClient.get<Conta[]>(this.URL_CONTAS);
    return this.contas;
  }

  inserir(conta: Conta): void {
    //return this.httpClient.post<Conta>(this.URL_CONTAS, conta);
    this.contas.push(conta);
  }

  //remover(id: number): Observable<object> {
  //return this.httpClient.delete(`${this.URL_CONTAS}/${id}`);

  //}
}
