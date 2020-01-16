import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire/storage';

@Component({
  selector: 'app-newsdashboard',
  templateUrl: './newsdashboard.component.html',
  styleUrls: ['./newsdashboard.component.css']
})
export class NewsdashboardComponent implements OnInit {

newsform:FormGroup;

  constructor(
               private router: Router, 
               private elementRef: ElementRef,
               private formBuilder:FormBuilder, 
               private firestore: AngularFirestore,
               private firestoarage: AngularFireStorage
             ) { }

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
paragraph: new FormControl("",Validators.required),
})
  }
//   maxLength(el) {    
//     if (!('maxLength' in el)) {
//         var max = el.attributes.maxLength.value;
//         el.onkeypress = function () {
//             if (this.value.length >= max) return false;
//         };
//     }
// }

// this.maxLength(document.getElementById("textDesc"));

  submitform(value){
    console.log(value);
    this.firestore.collection('news').add(value);
    }


    upload(event) {
      const randomId = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(randomId);
      this.task = this.ref.put(event.target.files[0]);
      this.uploadProgress = this.task.percentageChanges();
      this.downloadURL = this.task.downloadURL();
    }


}
