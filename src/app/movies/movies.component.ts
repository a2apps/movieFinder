import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular_list: Array<Object>;
  inTheatres: Array<Object>;
  searchStr: string;
  searchRes:Array<Object>;
  constructor(private _movieService: MovieService) { 
    this._movieService.getPopular().subscribe(res=>{
     this.popular_list=res.results;
    });
    this._movieService.getinTheatres().subscribe(res=>{
      this.inTheatres=res.results;
    });
    
    console.log("Service Injected!")
  }
  searchMovies(){
      this._movieService.searchMovies(this.searchStr).subscribe(res=>{
      this.searchRes=res.results;
      console.log(this.searchRes);
    });
  }
  ngOnInit() {
  }

}
