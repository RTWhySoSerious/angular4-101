# Angular4-101

This project was generated with [Angular CLI] version 1.3.2.

## First steps

### In order to use this project you have to have Angular CLI. Run:

```
npm install -g ng-cli
```

## Development server

```
npm install
```
For a dev server run: 
```
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Angular CLI cool tricks

To generate a new component run:
```
ng g c component-name
```
or `ng generate component component-name` 

To generate a new service run:
```
ng g s service-name
```
or `ng generate service service-name` 

## Adding extra libraries (Bootstrap)

```
npm install bootsrtap --save
```
`--save` saves this dependency into the package.json file, so later, you can run `npm install` and all the xtra libraries will be installed.

### Later you have to import external library in your `src/styles.css` file:
```css
@import "~bootstrap/dist/css/bootstrap.css";
```

# Syntax overview

## Define a component
There are 2 ways how to define a component:

### The easiest way is to use Angular CLI. Just run: `ng g c newComponent`
Angular CLI will create everything for you:
```
create src\app\new-component\new-component.component.css
  create src\app\new-component\new-component.component.html
  create src\app\new-component\new-component.component.spec.ts                                     ]
  create src\app\new-component\new-component.component.ts
  update src\app\app.module.ts
```
This way you will have a folder in you src directory:

```
src
    new-component/
         new-component.component.css
         new-component.component.html
         new-component.component.spec.ts 
         new-component.component.ts
         
```

And your `app.module.ts` file will be automatically updated:
```js
/*
  FileName: app.module.ts
*/
//...
import { NewComponentComponent } from './new-component/new-component.component';
//...
@NgModule({
  declarations: [
  //...
  NewComponentComponent
  ],
  //...
```
In order to use a new component in your HTML markup, you can look at ` new-component.component.ts`:
```js
//...
@Component({
  selector: 'app-new-component',
  //...
```
So your component HTML element will be: `<app-new-component></app-new-component>`

## ngFor directive
`*ngFor="let item of items"`

```js
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
```
## ngModel directive
`[(ngModel)]="username"`

```js
/*
  src/app/app.module.ts
*/
//...
import { FormsModule } from '@angular/forms';
//...

imports: [
  //...
  FormsModule,
  //...
 ],
```

```html
<input [(ngModel)]="username" class="input" />
```

```js
export class CoursesComponent{
  //...
  username = "RT Sullivan";
  //...
  /*
    later you can access username with this.username
  */
```

## Attributes of DOM elements

There are different ways of how we can do data binding. This is a small example of a one way data-binding. One way data-binding means that if smth changes in the component, it will change in DOM, but if smth changes in the DOM it will not change in the component. So you can use one way data binding for plain text like:

```html
<h2>{{'List of '+ title}}</h2>
```
or for a src attribute, like:
```html
<img [src]="imageUrl" />
```
# Property binding 
Class binding, style binding and attribute binding: is called property binding. 
## Class binding

```html
<button class="btn btn-primary" [class.active]="isActive">Save</button>
```
```js
isActive = true;
```

## Style binding

```html
<button [style.backgroundColor]="isActive ? 'green' : 'red' ">New button</button>
```
So it means that, if `isActive` is true, so the button's attribute `style.backgroundColor` will be green, and on the opposite, it will be red.
```js
isActive = true;
```

## Event binding
### Event bubbling

```html
<div (click)="onDivClicked()">
  <button (click)="onSave()">Save</button>
</div>
```

```js
onSave() {
  console.log('Log from button');
}
onDivClicked() {
  console.log('Log from div');
}
```
If you click on the button the output in console will be:
```
Log from div
```
```
Log from button
```
This is called event bubbling.
### `$event.stopPropagation()` stops event bubbling:
```html
<div (click)="onDivClicked()">
  <button (click)="onSave($event)">Save</button>
</div>
```

```js
onSave() {
  $event.stopPropagation();
  console.log('Log from button');
}
onDivClicked() {
  console.log('Log from div');
}
```
The output in console will be:
```
Log from button
```
### `emit()` Raising custom events from components:

```js
/*
  src/app/app.component.ts
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavChanged() {
    console.log('Was clicked');
  }
}
```
In the `app.component.ts` file you need to define a function that you want to call (`onFavChanged`)
```html
<!--src/app/app.component.html-->
  <fav [isFavorite]="post.isFavorite" (clickToChange)="onFavChanged()"></fav>
```
In the `app.component.html` file you have to assign an event (`clickToChange`) that will trigger the (`onFavChanged`) function

```html
<!--src/app/fav.component.html-->
<span
  class="glyphicon"
  [class.glyphicon-star]="isFav"
  [class.glyphicon-star-empty]="!isFav"
  (click)="onClick()"
></span>
```
In the `fav.component.html` file is a markup of a star that will be changed when you click on it
```js
/*
  src/app/fav.component.ts
*/
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

```
In the `fav.component.ts` file you have to emit an event (`clickToChange`) that will trigger the (`onFavChanged`) function in the `app.component.ts` file

### So when you click on the star, the `this.clickToChange.emit()` (`fav.component.ts` file) fires, and makes the function `onFavChanged()` (`app.component.ts` file) go off.





