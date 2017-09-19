import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalCommentComponent } from './artical-comment.component';

describe('ArticalCommentComponent', () => {
  let component: ArticalCommentComponent;
  let fixture: ComponentFixture<ArticalCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
