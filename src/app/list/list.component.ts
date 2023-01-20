import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  showSecret = false;
  log = [] as any;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
