import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCompanyId } from './admin-company-id';

describe('AdminCompanyId', () => {
  let component: AdminCompanyId;
  let fixture: ComponentFixture<AdminCompanyId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCompanyId],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCompanyId);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
