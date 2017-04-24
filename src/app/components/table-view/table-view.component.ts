import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() items;
  @Output() emitEvent = new EventEmitter();
  @Output() emitEditEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  tableEvent(item) {
    this.emitEvent.emit(item);
  }
  editEvent(item) {
    this.emitEditEvent.emit(item);
  }
}
