import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipNoteComponent } from './membership-note.component';

describe('MembershipNoteComponent', () => {
  let component: MembershipNoteComponent;
  let fixture: ComponentFixture<MembershipNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembershipNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
