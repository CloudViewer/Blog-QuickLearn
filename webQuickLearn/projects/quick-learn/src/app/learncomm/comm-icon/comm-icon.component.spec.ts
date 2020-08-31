import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommIconComponent } from './comm-icon.component';

describe('CommIconComponent', () => {
  let component: CommIconComponent;
  let fixture: ComponentFixture<CommIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
