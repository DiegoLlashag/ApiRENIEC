import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CompHijoComponent } from './comp-hijo/comp-hijo.component';
import { ConsultaApiReniecComponent } from './consulta-api-reniec/consulta-api-reniec.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    CompHijoComponent,
    ConsultaApiReniecComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    NavbarComponent,
    CompHijoComponent,
    ConsultaApiReniecComponent
  ]
})
export class ComponentsModule { }
