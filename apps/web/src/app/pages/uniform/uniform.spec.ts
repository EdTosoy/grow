import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Uniform } from './uniform';

describe('Uniform', () => {
  let component: Uniform;
  let fixture: ComponentFixture<Uniform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uniform],
    }).compileComponents();

    fixture = TestBed.createComponent(Uniform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
