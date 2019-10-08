// import { CountryCodeService } from './../country-code.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegularExps } from './RegularExps';

// import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  RegExp: RegularExps[] = [
    {
      email: null,
      password: null,
      mobNo: null
    }
  ]
  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/login']);
  }


  ngOnInit() {

  }

}
