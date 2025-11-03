import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeClients } from './see-clients';

describe('SeeClients', () => {
  let component: SeeClients;
  let fixture: ComponentFixture<SeeClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
