import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartKiloVoltAmpereReactComponent } from './chart-kilo-volt-ampere-react.component';

describe('ChartKiloVoltAmpereReactComponent', () => {
  let component: ChartKiloVoltAmpereReactComponent;
  let fixture: ComponentFixture<ChartKiloVoltAmpereReactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartKiloVoltAmpereReactComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartKiloVoltAmpereReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
