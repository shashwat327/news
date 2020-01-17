import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model'; 

@Component({
  selector: 'app-subcontent',
  templateUrl: './subcontent.component.html',
  styleUrls: ['./subcontent.component.css']
})
export class SubcontentComponent implements OnInit {


  list: News[];
  headlineData: any;
  paragraphData: any;
  imageUploadData: string;
  dataTimeData: Date;
  constructor(private router: Router,private service:NewsService,
    private route: ActivatedRoute) { }

  goHome() {
    this.router.navigate(['']); 
  }
  gotoIndia() {
    this.router.navigate(['india']); 
  }


  ngOnInit() {

    this.service.getIndia().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data; 
      });
      this.headlineData=  this.route.snapshot.paramMap.get('india')

      this.getparagraph();
      // console.log(JSON.stringify(this.list)); 
   });

   this.service.getWorld().subscribe(actionArray => {
    this.list = actionArray.map(a => {
      const data = a.payload.doc.data() as News;
      data.id = a.payload.doc.id;
      // console.log(data);
      return data; 
    });
    this.headlineData=  this.route.snapshot.paramMap.get('world')

    this.getparagraph();
    // console.log(JSON.stringify(this.list)); 
 });

 this.service.getSports().subscribe(actionArray => {
  this.list = actionArray.map(a => {
    const data = a.payload.doc.data() as News;
    data.id = a.payload.doc.id;
    // console.log(data);
    return data; 
  });
  this.headlineData=  this.route.snapshot.paramMap.get('sports')

  this.getparagraph();
  // console.log(JSON.stringify(this.list)); 
});

this.service.getMovies().subscribe(actionArray => {
  this.list = actionArray.map(a => {
    const data = a.payload.doc.data() as News;
    data.id = a.payload.doc.id;
    // console.log(data);
    return data; 
  });
  this.headlineData=  this.route.snapshot.paramMap.get('movies')

  this.getparagraph();
  // console.log(JSON.stringify(this.list)); 
});

this.service.getBusiness().subscribe(actionArray => {
  this.list = actionArray.map(a => {
    const data = a.payload.doc.data() as News;
    data.id = a.payload.doc.id;
    // console.log(data);
    return data; 
  });
  this.headlineData=  this.route.snapshot.paramMap.get('sports')

    this.getparagraph();
  //  console.log(JSON.stringify(this.list)); 
});
 
 }


 getparagraph(){
for(var i=0;i<this.list.length;i++){
  if(this.list[i].headline==this.headlineData){

   this.paragraphData= this.list[i].paragraph;
   this.imageUploadData= this.list[i].imgUpload;
   this.dataTimeData=this.list[i].dateTime
   break;
  }
 
}
// console.log(this.paragraphData);
}
}
