import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-newsdashboard',
  templateUrl: './newsdashboard.component.html',
  styleUrls: ['./newsdashboard.component.css']
})
export class NewsdashboardComponent implements OnInit {

newsform:FormGroup;

  constructor(private router: Router, private elementRef: ElementRef,
    private formBuilder:FormBuilder, private firestore: AngularFirestore) { }
  goHome() {this.router.navigate(['']);}

  // ngAfterViewInit(){
  //   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "white";
  // }

  ngOnInit() {
this.newsform=this.formBuilder.group({

category: new FormControl("",Validators.required),
subcategory: new FormControl("",Validators.required),
headline: new FormControl("",Validators.required),
description: new FormControl("",Validators.required),

})

  }


  submitform(value){
    console.log(value);
    this.firestore.collection('news').add(value);
    }





}
