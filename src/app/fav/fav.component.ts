import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  @Input('isFavorite') isFav: boolean;
  @Output() clickToChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFav = !this.isFav;
    this.clickToChange.emit();
  }

}
