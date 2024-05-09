import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fornecedor-detail',
  standalone: true,
  imports: [],
  templateUrl: './fornecedor-detail.component.html',
  styleUrl: './fornecedor-detail.component.css'
})
export class FornecedorDetailComponent {
  constructor(private route: ActivatedRoute){
    this.getFornecedorById()
  }

  id?: string

  getFornecedorById(){
    const id = this.route.snapshot.paramMap.get('id')??''
    console.log(id)
  }
  
}
