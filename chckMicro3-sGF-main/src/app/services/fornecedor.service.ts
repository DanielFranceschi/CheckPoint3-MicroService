import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from '../interfaces/fornecedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FornecedorService {
  private fornecedorUrl = "http://localhost:3000/fornecedor"
  constructor(private http: HttpClient){}

  httpHeader = {
    headers:{
      "Content-Type":"Application/json"
    }
  }
  list(): Observable<Fornecedor[]>{ 
    return this.http.get<Fornecedor[]>(this.fornecedorUrl) as Observable<Fornecedor[]>
  }

  getById(id: string): Observable<Fornecedor> {
    console.log(`${this.fornecedorUrl}/${id}`);
    return this.http.get<Fornecedor>(`${this.fornecedorUrl}/${id}`) as Observable<Fornecedor>;
  }

  remove(id: string){
    console.log(`${this.fornecedorUrl}/${id}`)
      return this.http.delete(`${this.fornecedorUrl}/${id}`);
  }

  add(fornecedor:Fornecedor){
    return this.http.post(this.fornecedorUrl, fornecedor, this.httpHeader)
  }

  update(fornecedor: Fornecedor) {
    return this.http.put(`${this.fornecedorUrl}/${fornecedor.id}`, fornecedor, this.httpHeader)
  }


}