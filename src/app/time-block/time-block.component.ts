import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-block',
  templateUrl: './time-block.component.html',
  styleUrls: ['./time-block.component.css'],
})
export class TimeBlockComponent implements OnInit {
  @Input() time: number = 0;
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
