import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProjectComponent } from './start-project.component';

describe('StartProjectComponent', () => {
  let component: StartProjectComponent;
  let fixture: ComponentFixture<StartProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
