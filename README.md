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
* The first way is to use Angular CLI. Just run: `ng g c component-name`
This way you will have a folder in you src directory

```
src
    component-name/
         component-name.component.css
         component-name.component.html
         component-name.component.ts
         
```
* The second way is to do it manualy. You will need:
```
component-name.component.ts | app.modules.ts | app.component.html  

```

```js
/*
  fileNmae:  component-name.component.ts
  This is an actual component.
*/
import { Component } from '@angular/core';

@Component({
  selector: 'component-name',
  template: '<h2>{{ Title: + {{ title }} }}</h2>'
})

export class ComponentName{
  title = "List of courses";
}
```
