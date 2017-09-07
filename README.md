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

To generate a new component. run:
```
ng g c component-name
```
or `ng generate component component-name` 

# Syntax overview
In Angular 4 you should name components like this
`yourComponentName.component.ts`

## Define a component
There are 2 ways how to do that:
* The first way is to use Angular CLI. Just run: `ng g c newComponent`
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

And your `app.module.ts` file will be updated:
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
* The second way is to do it manualy. You will need:
```
component-name.component.ts | app.modules.ts | app.component.html  
```

```js
/*
  fileName:  component-name.component.ts
  This is an actual component.
*/
import { Component } from '@angular/core';

@Component({
  selector: 'component-name',
  template: '<h2>{{ Title: + {{ title }} }}</h2>'
})

export class ComponentName{
  title = "Some title";
}
```
