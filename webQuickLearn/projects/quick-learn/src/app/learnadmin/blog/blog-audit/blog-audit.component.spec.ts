import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAuditComponent } from './blog-audit.component';

describe('BlogAuditComponent', () => {
  let component: BlogAuditComponent;
  let fixture: ComponentFixture<BlogAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
