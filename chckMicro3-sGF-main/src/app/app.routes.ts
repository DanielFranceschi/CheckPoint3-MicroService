import { Routes } from '@angular/router';
import { RotasComponent } from './components/rotas/rotas.component';
import { FornecedorService } from './services/fornecedor.service';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';

export const routes: Routes = [
    { path: '', component: FornecedorComponent},
    
];
