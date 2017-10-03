import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  @Input('isFavorite') isFav: boolean;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFav = !this.isFav;
  }

}
