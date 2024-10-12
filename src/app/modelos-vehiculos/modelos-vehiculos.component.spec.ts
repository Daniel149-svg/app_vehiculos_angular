import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosVehiculosComponent } from './modelos-vehiculos.component';

describe('ModelosVehiculosComponent', () => {
  let component: ModelosVehiculosComponent;
  let fixture: ComponentFixture<ModelosVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosVehiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
