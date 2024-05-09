import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../interfaces/fornecedor';
import { FornecedorService } from '../../sevices/fornecedor.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css',
})
export class FornecedorComponent implements OnInit {
  fornecedorForm: FormGroup = new FormGroup({});
  constructor(
    private fornecedorService: FornecedorService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.fornecedorForm = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }
  addNovoFornecedor() {
    if (this.fornecedorForm.valid) {
      const { id, nome, endereco, telefone } = this.fornecedorForm.value;
      this.fornecedorService.addFornecedor(id, nome, endereco, telefone);
      this.fornecedorForm.reset;
      alert('fornecedor cadastrado com sucesso!!');
    } else alert('informaçoes invalidas');
  }
}
