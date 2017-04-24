import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  @Input()
  daten: string;

  @Output()
  onChoose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  meineWahl() {
    this.onChoose.emit('test');
  }
}
