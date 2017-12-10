import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {DisciplinaComponent} from './disciplina/disciplina.component';
import {TurmaComponent} from './turma/turma.component';
import {CadastroDeDisciplinaComponent} from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import {CadastroDeTurmaComponent} from './cadastro-de-turma/cadastro-de-turma.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ListaDePessoasComponent } from './lista-de-pessoas/lista-de-pessoas.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CadastroDePessoaComponent } from './cadastro-de-pessoa/cadastro-de-pessoa.component';
import { ListaDeFuncionariosComponent } from './lista-de-funcionarios/lista-de-funcionarios.component';
import { CadastroDeFuncionarioComponent } from './cadastro-de-funcionario/cadastro-de-funcionario.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CadastroDeFrequenciaComponent } from './cadastro-de-frequencia/cadastro-de-frequencia.component';
import { RelatorioDeFrequenciaComponent } from './relatorio-de-frequencia/relatorio-de-frequencia.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
    /*{path: 'disciplinas', component: ListaDeDisciplinasComponent},
    {path: 'disciplinas/:id', component: DisciplinaComponent},
    {path: 'disciplinas/:id/novo', component: CadastroDeDisciplinaComponent},
    {path: 'disciplinas/:id/editar', component: CadastroDeDisciplinaComponent},
    {path: 'cadastrar-turma', component: CadastroDeTurmaComponent},
    {path: 'turmas', component: ListaDeTurmasComponent},
    {path: 'turmas/:id', component: TurmaComponent},
    {path: 'pessoas', component: ListaDePessoasComponent},
    {path: 'pessoas/:id', component: PessoaComponent},
    {path: 'pessoas/:id/novo', component: CadastroDePessoaComponent},
    {path: 'pessoas/:id/editar', component: CadastroDePessoaComponent},
    {path: 'funcionarios', component: ListaDeFuncionariosComponent},
    {path: 'funcionarios/:id', component: FuncionarioComponent},
    {path: 'funcionarios/:id/novo', component: CadastroDeFuncionarioComponent},
    {path: 'funcionarios/:id/editar', component: CadastroDeFuncionarioComponent},*/
    {path: 'frequencias/cadastrar', component: CadastroDeFrequenciaComponent},
    {path: 'frequencias/relatorio', component: RelatorioDeFrequenciaComponent},
    {path: '', component: RelatorioDeFrequenciaComponent},
    {path: '**', component: PaginaNaoEncontradaComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
