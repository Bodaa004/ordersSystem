import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSidebarComponent } from './orders-sidebar.component';

describe('OrdersSidebarComponent', () => {
  let component: OrdersSidebarComponent;
  let fixture: ComponentFixture<OrdersSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
