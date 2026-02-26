import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Metrobank } from './metrobank';

describe('Metrobank', () => {
  let component: Metrobank;
  let fixture: ComponentFixture<Metrobank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metrobank],
    }).compileComponents();

    fixture = TestBed.createComponent(Metrobank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
