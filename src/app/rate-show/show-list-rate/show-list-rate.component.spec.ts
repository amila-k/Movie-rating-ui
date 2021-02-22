import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListRateComponent } from './show-list-rate.component';

describe('ShowListRateComponent', () => {
  let component: ShowListRateComponent;
  let fixture: ComponentFixture<ShowListRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowListRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
