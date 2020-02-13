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
    this.tarefas = [
      new Tarefa(1, "tarefa1", false),
      new Tarefa(2, "tarefa2", true)
    ]
  }

  listarTodos(){
    return this.tarefaService.listarTodos();
  }

}
