import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasVehiculosComponent } from './caracteristicas-vehiculos.component';

describe('CaracteristicasVehiculosComponent', () => {
  let component: CaracteristicasVehiculosComponent;
  let fixture: ComponentFixture<CaracteristicasVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasVehiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
