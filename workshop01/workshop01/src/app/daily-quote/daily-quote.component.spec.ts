import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyQuoteComponent } from './daily-quote.component';
import {DailyQuoteService} from "../daily-quote.service";

describe('DailyQuoteComponent', () => {
  let component: DailyQuoteComponent;
  let fixture: ComponentFixture<DailyQuoteComponent>;

  const mockDailyQuoteService: jasmine.SpyObj<DailyQuoteService> = jasmine.createSpyObj(DailyQuoteService, {
   getRandom: "Random Quote"
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyQuoteComponent ],
      providers: [
        { provide: DailyQuoteService, useValue: mockDailyQuoteService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(mockDailyQuoteService.getRandom).toHaveBeenCalled();
    expect(component.quote).toEqual("Random Quote")
  });
});
