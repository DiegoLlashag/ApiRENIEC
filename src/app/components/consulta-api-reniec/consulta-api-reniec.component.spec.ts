import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaApiReniecComponent } from './consulta-api-reniec.component';

describe('ConsultaApiReniecComponent', () => {
  let component: ConsultaApiReniecComponent;
  let fixture: ComponentFixture<ConsultaApiReniecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaApiReniecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaApiReniecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
