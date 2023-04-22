import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDatailComponent } from './poke-datail.component';

describe('PokeDatailComponent', () => {
  let component: PokeDatailComponent;
  let fixture: ComponentFixture<PokeDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
