import { Component, OnInit } from '@angular/core';
import {DailyQuoteService} from "../daily-quote.service";

@Component({
  selector: 'app-daily-quote',
  templateUrl: './daily-quote.component.html',
  styleUrls: ['./daily-quote.component.css']
})
export class DailyQuoteComponent implements OnInit {

  public quote: String;

  constructor(private dailyQuoteService: DailyQuoteService) { }

  ngOnInit(): void {
    this.quote = this.dailyQuoteService.getRandom();
  }

}
