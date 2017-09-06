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
DIRECTORY STRUCTURE
-------------------

```
common
    config/              contains shared configurations
    mail/                contains view files for e-mails
    models/              contains model classes used in both backend and frontend
    tests/               contains tests for common classes    
```
* The second way is to do it manualy:

```js
// courses.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: '<h2>{{ Title: + {{ title }} }}</h2>'
})

export class CoursesComponent{
  title = "List of courses";
}
```
