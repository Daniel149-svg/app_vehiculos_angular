import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoVehiculosComponent } from './contacto-vehiculos.component';

describe('ContactoVehiculosComponent', () => {
  let component: ContactoVehiculosComponent;
  let fixture: ComponentFixture<ContactoVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoVehiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
