import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSeparatorComponent } from './wheel-separator.component';

describe('WheelSeparatorComponent', () => {
  let component: WheelSeparatorComponent;
  let fixture: ComponentFixture<WheelSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheelSeparatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheelSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
