import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienOpinionCard } from './clien-opinion-card';

describe('ClienOpinionCard', () => {
  let component: ClienOpinionCard;
  let fixture: ComponentFixture<ClienOpinionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienOpinionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienOpinionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
