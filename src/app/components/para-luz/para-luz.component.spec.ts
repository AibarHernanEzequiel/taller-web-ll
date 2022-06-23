import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaLuzComponent } from './para-luz.component';

describe('ParaLuzComponent', () => {
  let component: ParaLuzComponent;
  let fixture: ComponentFixture<ParaLuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaLuzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
