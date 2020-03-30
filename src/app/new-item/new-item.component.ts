import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  @Input() click: Function;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.click();
  }

}
