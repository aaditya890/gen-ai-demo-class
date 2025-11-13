import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsSliderComponent } from './tools-slider.component';

describe('ToolsSliderComponent', () => {
  let component: ToolsSliderComponent;
  let fixture: ComponentFixture<ToolsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
