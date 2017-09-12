import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  @Input() isFav: boolean;
  constructor() { }

  ngOnInit() {
  }

}
