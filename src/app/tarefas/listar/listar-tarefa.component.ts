import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(){
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa:Tarefa):void{
    $event.preventDefault();
    //confirm método ultilitário do navegador
    if(confirm("'Deseja remover a tarefa'"+tarefa.nome + "?")){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa:Tarefa):void{
    if(confirm("'Deseja Alterar o status da tarefa'"+tarefa.nome+"?")){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
