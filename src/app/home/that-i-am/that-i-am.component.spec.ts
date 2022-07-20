import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThatIAmComponent } from './that-i-am.component';

describe('ThatIAmComponent', () => {
  let component: ThatIAmComponent;
  let fixture: ComponentFixture<ThatIAmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ThatIAmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThatIAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
