import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringDataComponent } from './spring-data.component';

describe('SpringDataComponent', () => {
  let component: SpringDataComponent;
  let fixture: ComponentFixture<SpringDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
