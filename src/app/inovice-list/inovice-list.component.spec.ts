import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoviceListComponent } from './inovice-list.component';

describe('InoviceListComponent', () => {
  let component: InoviceListComponent;
  let fixture: ComponentFixture<InoviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoviceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InoviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
