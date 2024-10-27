import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeSectionComponent } from './legal-notice-section.component';

describe('LegalNoticeSectionComponent', () => {
  let component: LegalNoticeSectionComponent;
  let fixture: ComponentFixture<LegalNoticeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalNoticeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
