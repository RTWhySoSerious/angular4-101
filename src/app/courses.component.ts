
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template:`
    <h2>{{'List of '+ title}}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
  `
})
export class CoursesComponent{
  title = 'courses';
  courses = ['Angular','Vue','React']
}