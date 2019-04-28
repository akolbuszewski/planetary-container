import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooserPanelComponent } from './chooser-panel.component';

describe('ChooserPanelComponent', () => {
  let component: ChooserPanelComponent;
  let fixture: ComponentFixture<ChooserPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooserPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
