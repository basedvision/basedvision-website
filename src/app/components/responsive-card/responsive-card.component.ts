import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-card',
  templateUrl: './responsive-card.component.html',
  styleUrls: ['./responsive-card.component.css']
})
export class ResponsiveCardComponent implements OnInit {

  @Input() frontText = "";
  @Input() backText = "";

  constructor() { }

  ngOnInit(): void {
  }

}
