import { Injectable } from '@angular/core';
import { Fornecedor } from '../interfaces/fornecedor';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  fornecedores: Fornecedor[] = [];

  constructor() {}

  addFornecedor(id: string, nome: string, endereco: string, telefone: string) {
    const novoFornecedor: Fornecedor = { id, nome, endereco, telefone };
    this.fornecedores.push(novoFornecedor);
  }
}
