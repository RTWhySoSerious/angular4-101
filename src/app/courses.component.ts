import { CoursesService } from './courses.service';

import { Component } from '@angular/core';
// <h2>{{'List of '+ title}}</h2> => is better for text
// <img [src]="imageUrl" /> => is better for img
// this is a one way data-binding (if smth changes in the component, it will change in DOM)
// if smth changes in the DOM it will not change in the component
//class binding, style binding and attr binding - it is called property binding 
// event bubbling => child then parent
// $event.stopPropagation() => stops event bubling 
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
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
    </div>  
  `
})
export class CoursesComponent{
  title = 'courses';
  courses;
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  isActive = true;
  onSave($event) {
    $event.stopPropagation();
    console.log($event);
    console.log('Message');
  }

  onDivClicked() {
    console.log('DIV');
  }


  constructor(service: CoursesService) {// dependecies injecting
    this.courses = service.getCourses();
  }
}