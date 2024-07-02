import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nombre: string = "Nombre de usuario"
  constructor(
    private dataService : DataService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  cambiarNombre(){
    this.nombre = "Diego Llashag"
    this.dataService.nombreUsuario = this.nombre;
  }
  cambiarNombreHijo(event: string){
    this.nombre = event
  }
}
