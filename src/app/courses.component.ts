import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent{
  title = 'courses';
  courses;
  imageUrl = "http://lorempixel.com/200/100";
  colSpan = 2;
  isActive = true;
  username = "RT Sullivan";

  onSave($event) {
    $event.stopPropagation();
    console.log($event);
    console.log('Message');
  }
  onDivClicked() {
    console.log('DIV');
  }
  onKeyUp($event) {
    if($event.keyCode === 13) console.log('Enter was pressed');
  }
  onKeyUpFiltered(){
    console.log('Enter was pressed');
  }

  onKeyUp2(email) {
    console.log(email);
  }

  onKeyUp3() {
    console.log(this.username);
  }


  constructor(service: CoursesService) {// dependecies injecting
    this.courses = service.getCourses();
  }
}