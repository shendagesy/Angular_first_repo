import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DisplayImage } from '../display-coupons/display-image.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayImageService {

  private _url : string ="/assets/data/images.json";

    constructor(private _http : HttpClient){

    }
    getImage(): Observable<DisplayImage[]> {
        return this._http.get<DisplayImage[]>(this._url);
    }
    
}
