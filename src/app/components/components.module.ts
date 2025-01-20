import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CompHijoComponent } from './comp-hijo/comp-hijo.component';
import { ConsultaApiReniecComponent } from './consulta-api-reniec/consulta-api-reniec.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    NavbarComponent,
    CompHijoComponent,
    ConsultaApiReniecComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule
  ],
  exports:[
    NavbarComponent,
    CompHijoComponent,
    ConsultaApiReniecComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
