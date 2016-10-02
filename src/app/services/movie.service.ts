import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class MovieService {
  apiKey: string;
  constructor(private _http: Http) { 
    this.apiKey= '79362b966dab99d8d236add232aafbd5';
    console.log('Service Initialized!')
  }
  
  getPopular(){
    return this._http.get('https://api.themoviedb.org/3/discover/movie?api_key=79362b966dab99d8d236add232aafbd5&language=en-US')
      .map(res=> res.json());
  }
  getinTheatres(){
    return this._http.get('https://api.themoviedb.org/3/discover/movie?api_key=79362b966dab99d8d236add232aafbd5&language=en-US&sort_by=release_date.desc&primary_release_date.gte=2015-08-10&primary_release_date.lte=2016-08-10')
      .map(res=> res.json());
  }
  searchMovies(searchstr:string){
    return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=79362b966dab99d8d236add232aafbd5&language=en-US&query='+searchstr)
      .map(res=> res.json());
  }
  getMovie(id){
    return this._http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=79362b966dab99d8d236add232aafbd5&language=en-US')
      .map(res=>res.json());
  }
}
