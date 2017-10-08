import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGalleryInfoComponent } from './product-gallery-info.component';

describe('ProductGalleryInfoComponent', () => {
  let component: ProductGalleryInfoComponent;
  let fixture: ComponentFixture<ProductGalleryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGalleryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGalleryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
