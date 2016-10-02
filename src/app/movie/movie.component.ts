import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:any;
  constructor(private router:ActivatedRoute, private _moviesService: MovieService) { }

  ngOnInit() {
    this.router.params.subscribe((params)=>{
      // console.log(params['id']);
      let id=params['id'];
      this._moviesService.getMovie(id).subscribe(res=>{
        this.movie=res;
        console.log(this.movie);
      })
    })
  }

}
