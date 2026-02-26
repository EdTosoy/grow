import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyId } from './company-id';

describe('CompanyId', () => {
  let component: CompanyId;
  let fixture: ComponentFixture<CompanyId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyId],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyId);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
