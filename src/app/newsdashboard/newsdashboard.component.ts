import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsdashboard',
  templateUrl: './newsdashboard.component.html',
  styleUrls: ['./newsdashboard.component.css']
})
export class NewsdashboardComponent implements OnInit {

  constructor(private router: Router, private elementRef: ElementRef) { }
  goHome() {this.router.navigate(['']);}

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "white";
  }
  ngOnInit() {}

}
