import { Routes } from '@angular/router';

import { RotasComponent } from './components/rotas/rotas.component';
import { FornecedorService } from './services/fornecedor.service';

export const routes: Routes = [
    { path: '', component: FornecedorService},
    
];
