import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartKiloVoltAmpereComponent } from './chart-kilo-volt-ampere.component';

describe('ChartKiloVoltAmpereComponent', () => {
  let component: ChartKiloVoltAmpereComponent;
  let fixture: ComponentFixture<ChartKiloVoltAmpereComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartKiloVoltAmpereComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartKiloVoltAmpereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
