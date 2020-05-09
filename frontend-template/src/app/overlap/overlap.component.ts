import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-overlap',
  templateUrl: './overlap.component.html',
  styleUrls: ['./overlap.component.scss']
})
export class OverlapComponent implements OnInit {

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  };

}
