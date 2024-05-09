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
  fornecedorForm: FormGroup = new FormGroup({});
  fornecedores:Fornecedor[] = []

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

  insert() {
    if (this.fornecedorForm.valid) {
      const fornecedorAdd: Fornecedor = {
        id: this.generateRandomString(6),
        nome: this.fornecedorForm.value.nome,
        telefone: this.fornecedorForm.value.telefone,
        endereco: this.fornecedorForm.value.endereco,
      }
      this.fornecedores.push(fornecedorAdd)
      this.fornecedorForm.reset();
      this.fornecedorService.add(fornecedorAdd).subscribe;
      alert("Cadastro Completo")
    }
  }
  list(): void {
    this.fornecedorService.list().subscribe((fornecedores)=>(this.fornecedores=fornecedores));
  }

  ngOnInit(): void {
    this.list();
  }

  remover(id: string): void {
     this.fornecedores = this.fornecedores.filter((c) => c.id !== id);
    this.fornecedorService.remove(id).subscribe();
    alert('Removido com sucesso!')
  }
  
}
