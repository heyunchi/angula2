import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTopComponent } from './topic-top.component';

describe('TopicTopComponent', () => {
  let component: TopicTopComponent;
  let fixture: ComponentFixture<TopicTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
