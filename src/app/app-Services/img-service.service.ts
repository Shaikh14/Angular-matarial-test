import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {

  constructor(private http :HttpClient) { }
  // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5



  getImage(username:any):Observable<any>{
    return this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=SHnozJ4H44LN2dcG3rXVdJmdO2Nhb4wF&q=${username}`)
  }
}
