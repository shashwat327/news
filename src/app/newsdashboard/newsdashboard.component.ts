import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireStorage } from 'angularfire/storage';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-newsdashboard',
  templateUrl: './newsdashboard.component.html',
  styleUrls: ['./newsdashboard.component.css']
})
export class NewsdashboardComponent implements OnInit {
  storageRef: AngularFireStorageReference;
  newsform:FormGroup;

  ref: any;
  task: any;
  uploadProgress: any;
  downloadURL: any;
  imageUploadUrl: any;

  constructor(
               private router: Router, 
               private elementRef: ElementRef,
               private formBuilder:FormBuilder, 
               private firestore: AngularFirestore,
               private afStorage: AngularFireStorage
             ) { }

 
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


goHome() {this.router.navigate(['']);}

  submitform(value){
    console.log(value);

    value.imgUpload = this.imageUploadUrl;
    
    this.firestore.collection('news').add(value);
    }


    upload(event) {
      // const randomId = Math.random().toString(36).substring(2);
      // this.ref = this.afStorage.ref(randomId);
      // this.task = this.ref.put(event.target.files[0]).downloadURL();
      // this.uploadProgress = this.task.percentageChanges();
      // // this.downloadURL = this.task.downloadURL();
      // this.task.snapshotChanges().pipe(
      //   finalize(() => {
      //     this.downloadURL = this.ref.getDownloadURL(); // <-- Here the downloadURL is available.
      //   })
      // ).subscribe();customElements
      // console.log(this.downloadURL);
      const randomId = Math.random().toString(36).substring(2);
      this.afStorage.upload("news/"+ event.target.files[0].name+randomId, event.target.files[0]).then(rst => {
        rst.ref.getDownloadURL().then(url => {
          console.log(url);

    this.imageUploadUrl= url;
          
        })
      })

      
    }

    // uploadImage(base64data) {

    //   const filePath = (`myURL/photo.jpg`);
    //   //const storageRef = firebase.storage().ref();
    
    //   var metadata = {
    //     contentType: 'image',
    //     cacheControl: "public, max-age=31536000",
    //   };
    
    //   const ref = this.afStorage.ref('new/');
    //   const task = ref.putString(base64data, 'data_url', metadata);
    //   const downloadURL = task.downloadURL();
    
    //   downloadURL.subscribe(url=>{
    //      if(url){
    //          console.log(url);
    //          //wirte the url to firestore
    //      }
    //   })
    
    // }

}
