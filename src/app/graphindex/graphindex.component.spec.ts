import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphindexComponent } from './graphindex.component';

describe('GraphindexComponent', () => {
  let component: GraphindexComponent;
  let fixture: ComponentFixture<GraphindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
