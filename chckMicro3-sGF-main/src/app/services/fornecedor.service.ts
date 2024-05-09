import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from '../interfaces/fornecedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private fornecedorUrl = "http://localhost:3000/fornecedor"
  constructor(private http: HttpClient){

  }

  fornecedores: Fornecedor[]= []

  listar(): Observable<Fornecedor[]>{ 
    return this.http.get<Fornecedor[]>(this.fornecedorUrl) as Observable<Fornecedor[]>
  }
  remover(id: string){
    const fornecedor = this.fornecedores.find(f => f.id == id)
    if (fornecedor) {
      const index = this.fornecedores.indexOf(fornecedor)
      this.fornecedores.splice(index, 1)      
    }
  }

  adicionar(fornecedor:Fornecedor){
    const httpHeader={
      headers:{
        "Content-Type" : "application/json"
      }
      
    }
    return this.http.post(this.fornecedorUrl, fornecedor, httpHeader)
  }

  add(fornecedor : Fornecedor){
    this.fornecedores.push(fornecedor)
  }

}
 