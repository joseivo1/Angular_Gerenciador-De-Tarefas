import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective {

  @Input() tarefaConcluida: boolean;

  constructor(private _el: ElementRef) { }

  ngOnInit(){
    if(this.tarefaConcluida){
      this._el.nativeElement.style.textDecoration = "line-through";
    }
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
