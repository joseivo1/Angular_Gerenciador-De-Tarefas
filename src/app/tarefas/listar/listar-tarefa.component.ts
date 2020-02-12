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

}
