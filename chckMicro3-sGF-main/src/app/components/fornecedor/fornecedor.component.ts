import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fornecedor } from '../../interfaces/fornecedor';
import { FornecedorService } from '../../services/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})
export class FornecedorComponent {
  fornecedores:Fornecedor[] = []

  fornecedorForm: FormGroup = new FormGroup({});

  constructor(private fornecedorService: FornecedorService, private formBuilder: FormBuilder){
    this.fornecedorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
    })
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  inserir() {
    if (this.fornecedorForm.valid) {
      const fornecedorNovo: Fornecedor = {
        nome: this.fornecedorForm.value.nome,
        telefone: this.fornecedorForm.value.telefone,
        id: this.generateRandomString(6),
        endereco: this.fornecedorForm.value.endereco
      }
      this.fornecedorForm.reset();
      this.fornecedorService.add(fornecedorNovo);
      alert("Cadastro Completo")
    }
  }
  listar(): void {
    this.fornecedorService.listar().subscribe((item)=>(this.fornecedores=item));
  }

  remover(id: string): void {
    this.fornecedorService.remover(id);
    alert("Removido com sucesso!");
  }

  ngOnInit(): void {
    this.listar();
  }
}
