import { Component } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent{

  course = {
    title: "Angular course",
    rating: 4.975,
    students: 30231,
    price: 199.95,
    releaseDate: new Date(2017, 9, 12)
  }


  constructor() { }
}
