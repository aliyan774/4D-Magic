import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerComponent } from './logger.component';

describe('LoggerComponent', () => {
  let component: LoggerComponent;
  let fixture: ComponentFixture<LoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
