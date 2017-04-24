import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {
  info = 'Information';
  status = 2;
  wert = '';
  zahl = 123.456;
  datum = new Date(2017, 3, 20);
  amount = 4000;

  constructor() { }

  ngOnInit() {
  }

  test(i) {
    if (i) {
      return 'Test1';
    }
    return 'Test2';
  }

  change(e) {
    this.info = 'Neu';
    console.log(e);
  }

  key(e) {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      alert('Gespeichert!');
    }
  }
}
