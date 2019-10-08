import { Component, OnInit } from '@angular/core';
import { DisplayImageService } from '../services/display-image.service';
import { DisplayImage } from './display-image.model';


@Component({
  selector: 'app-display-coupons',
  templateUrl: './display-coupons.component.html',
  styleUrls: ['./display-coupons.component.css'],
})
export class DisplayCouponsComponent implements OnInit {

  displayImage:DisplayImage[];

  constructor(private _DisplayImageService : DisplayImageService) { }

  ngOnInit() {
    this._DisplayImageService.getImage().subscribe(data => this.displayImage = data);

  }

}
