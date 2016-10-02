import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Jsonp} from '@angular/http';
import { MovieService } from './services/movie.service';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { routing } from './app.routing';
import { MovieComponent } from './movie/movie.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MovieService, Jsonp],
  bootstrap: [AppComponent]
})
export class AppModule { }
