import { Routes } from '@angular/router';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import  {FornecedorDetailComponent} from './components/fornecedor-detail/fornecedor-detail.component';


export const routes: Routes = [
    { path: 'fornecedor', component: FornecedorComponent},
    { path: 'fornecedor/:id', component: FornecedorDetailComponent}
    
];
