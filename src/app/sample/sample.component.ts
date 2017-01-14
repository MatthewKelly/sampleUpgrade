import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  public user: string;
  constructor(private router: Router) { }
  public GoPage2() {
    this.router.navigate(['page2']);
  }
}
