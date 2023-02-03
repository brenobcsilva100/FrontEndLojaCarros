import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloDoSiteComponent } from './titulo-do-site.component';

describe('TituloDoSiteComponent', () => {
  let component: TituloDoSiteComponent;
  let fixture: ComponentFixture<TituloDoSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloDoSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloDoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
