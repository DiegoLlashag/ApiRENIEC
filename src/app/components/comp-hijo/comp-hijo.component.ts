import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp-hijo',
  templateUrl: './comp-hijo.component.html',
  styleUrls: ['./comp-hijo.component.css']
})
export class CompHijoComponent {
  @Input() nombreHijo: string = 'Sin Nombre'
  @Output() cambioNombreHijo = new EventEmitter<string>();
  
  constructor(
    private dataService : DataService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  cambiarNombre(){
    this.nombreHijo = "Alfonso Antonio";
    this.cambioNombreHijo.emit(this.nombreHijo)
    this.dataService.nombreUsuario = this.nombreHijo;
  }
}
