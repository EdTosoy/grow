import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminMetrobank } from './admin-metrobank';

describe('AdminMetrobank', () => {
  let component: AdminMetrobank;
  let fixture: ComponentFixture<AdminMetrobank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMetrobank],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMetrobank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
