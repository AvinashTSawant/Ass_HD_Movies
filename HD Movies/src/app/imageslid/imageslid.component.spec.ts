import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageslidComponent } from './imageslid.component';

describe('ImageslidComponent', () => {
  let component: ImageslidComponent;
  let fixture: ComponentFixture<ImageslidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageslidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageslidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
