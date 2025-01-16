import { Component } from '@angular/core';
import { Persona } from './Persona.model';

@Component({
  selector: 'app-consulta-api-reniec',
  templateUrl: './consulta-api-reniec.component.html',
  styleUrls: ['./consulta-api-reniec.component.css']
})
export class ConsultaApiReniecComponent {
  persona = new Persona()
  dniBuscar = ''
  consultar(){
    console.log("consultando")
    console.log("DNI", this.dniBuscar)

    fetch("https://apiperu.dev/api/dni/"+this.dniBuscar+"?api_token=c28475ef43107778bc1da44d90c9aed6afc0565e12f704e0f612a9e972f7c23f")
    .then((datos)=>datos.json())
    .then((datos)=>{
        console.log(datos)
        this.persona.dni = datos.data.numero;
        this.persona.nombre = datos.data.nombres;
        this.persona.apellido = datos.data.apellido_paterno+ " "+ datos.data.apellido_materno;
        this.persona.cui = datos.data.codigo_verificacion;
    });

  }
}
