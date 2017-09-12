import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from "./courses/courses.component";
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { FavComponent } from './fav/fav.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PipesComponent,
    CustomPipesComponent,
    SummaryPipe,
    FavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService//dependencies injection
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
