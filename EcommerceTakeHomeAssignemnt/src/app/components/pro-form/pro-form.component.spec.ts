import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProFormComponent } from './pro-form.component';

describe('ProFormComponent', () => {
  let component: ProFormComponent;
  let fixture: ComponentFixture<ProFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
