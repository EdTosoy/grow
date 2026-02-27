import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUniform } from './admin-uniform';

describe('AdminUniform', () => {
  let component: AdminUniform;
  let fixture: ComponentFixture<AdminUniform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUniform],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUniform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
