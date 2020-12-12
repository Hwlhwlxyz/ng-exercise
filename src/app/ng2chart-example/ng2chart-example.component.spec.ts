import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2chartExampleComponent } from './ng2chart-example.component';
import 'chart.js/dist/Chart.bundle.min.js';

describe('Ng2chartExampleComponent', () => {
  let component: Ng2chartExampleComponent;
  let fixture: ComponentFixture<Ng2chartExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2chartExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2chartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
