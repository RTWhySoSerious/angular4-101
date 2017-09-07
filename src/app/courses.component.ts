import { CoursesService } from './courses.service';

import { Component } from '@angular/core';
// <h2>{{'List of '+ title}}</h2> => is better for text
// <img [src]="imageUrl" /> => is better for img
// this is a one way data-binding (if smth changes in the component, it will change in DOM)
// if smth changes in the DOM it will not change in the component
@Component({
  selector: 'courses',
  template:`
    <h2>{{'List of '+ title}}</h2>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button [style.backgroundColor]="isActive ? 'green' : 'red' ">New button</button>
  `
})
export class CoursesComponent{
  title = 'courses';
  courses;
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  isActive = true;


  constructor(service: CoursesService) {// dependecies injecting
    this.courses = service.getCourses();
  }
}