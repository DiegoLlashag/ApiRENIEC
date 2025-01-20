// import { Component } from '@angular/core';
import { Persona } from './Persona.model';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-consulta-api-reniec',
  templateUrl: './consulta-api-reniec.component.html',
  styleUrls: ['./consulta-api-reniec.component.css']
})
export class ConsultaApiReniecComponent {
//   persona = new Persona()
//   dniBuscar = ''
//   consultar(){
//     console.log("consultando")
//     console.log("DNI", this.dniBuscar)

//     fetch("https://apiperu.dev/api/dni/"+this.dniBuscar+"?api_token=c28475ef43107778bc1da44d90c9aed6afc0565e12f704e0f612a9e972f7c23f")
//     .then((datos)=>datos.json())
//     .then((datos)=>{
//         console.log(datos)
//         this.persona.dni = datos.data.numero;
//         this.persona.nombre = datos.data.nombres;
//         this.persona.apellido = datos.data.apellido_paterno+ " "+ datos.data.apellido_materno;
//         this.persona.cui = datos.data.codigo_verificacion;
//     });

//   }
dni: string = '';
resultados = new Persona()

constructor(
  private http: HttpClient,
  private spinner: NgxSpinnerService
) {}

consultarDni(event: Event) {
  this.spinner.show();
  event.preventDefault();
  if (this.dni) {
    this.http.get("https://apiperu.dev/api/dni/"+this.dni+"?api_token=c28475ef43107778bc1da44d90c9aed6afc0565e12f704e0f612a9e972f7c23f").subscribe(
      (data: any) => {
        this.spinner.hide();
        if(data.success) {
          this.resultados = data.data;
          this.resultados.dni = data.data.numero;
          this.resultados.nombre = data.data.nombres;
          this.resultados.apellido = data.data.apellido_paterno+ " "+ data.data.apellido_materno;
          this.resultados.cui = data.data.codigo_verificacion;
        }
        else{
          window.alert(`Error al consultar el DNI: ${data.message}`);
        }
      },
      (error) => {
        this.spinner.hide();
        console.error('Error al consultar el DNI', error);
        window.alert(`Error al consultar el DNI: ${error.message}`);
      }
    );
  } else {
    this.spinner.hide();
  }
}
mostrarMensaje() {
  window.alert('Código verificador');
}
}
