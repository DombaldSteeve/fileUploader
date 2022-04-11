import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprecupComponent } from './comprecup.component';

describe('ComprecupComponent', () => {
  let component: ComprecupComponent;
  let fixture: ComponentFixture<ComprecupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprecupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprecupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
