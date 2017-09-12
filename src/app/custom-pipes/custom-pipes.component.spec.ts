import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipesComponent } from './custom-pipes.component';

describe('CustomPipesComponent', () => {
  let component: CustomPipesComponent;
  let fixture: ComponentFixture<CustomPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
