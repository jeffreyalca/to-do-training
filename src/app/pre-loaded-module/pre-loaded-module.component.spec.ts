import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoadedModuleComponent } from './pre-loaded-module.component';

describe('PreLoadedModuleComponent', () => {
  let component: PreLoadedModuleComponent;
  let fixture: ComponentFixture<PreLoadedModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoadedModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoadedModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
