import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaugtherComponent } from './daugther.component';

describe('DaugtherComponent', () => {
  let component: DaugtherComponent;
  let fixture: ComponentFixture<DaugtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaugtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaugtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
