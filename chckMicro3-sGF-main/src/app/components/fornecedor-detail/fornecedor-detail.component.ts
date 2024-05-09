import { Component } from '@angular/core';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../interfaces/fornecedor';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fornecedor-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fornecedor-detail.component.html',
  styleUrl: './fornecedor-detail.component.css'
})
export class FornecedorDetailComponent {
  fornecedorForm: FormGroup = new FormGroup({})
  fornecedor?: Fornecedor

  constructor(private fornecedorService: FornecedorService, private formBuilder: FormBuilder, private route: ActivatedRoute){
    this.getFornecedorById()
  }

  id?:string;
  getFornecedorById(){
    this.id = this.route.snapshot.paramMap.get('id') ?? ''
    this.fornecedorService.getById(this.id).subscribe((fornecedorResponse) => this.fornecedor = fornecedorResponse)

    this.fornecedorForm = this.formBuilder.group({
      id: [this.fornecedor?.id],
      nome: [this.fornecedor?.nome],
      telefone: [this.fornecedor?.telefone],
      endereco: [this.fornecedor?.endereco],
    })

  }

    update(): void {
      if (this.fornecedorForm.valid) {
        const fornecedorAdd: Fornecedor = {
          id: this.fornecedorForm.value.id,
          nome: this.fornecedorForm.value.nome,
          telefone: this.fornecedorForm.value.telefone,
          endereco: this.fornecedorForm.value.endereco
        };
  
        this.fornecedorService.update(fornecedorAdd).subscribe()
        alert('Atualizado com sucesso!')
      }
  }
}

