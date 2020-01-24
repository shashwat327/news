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
  list2: News[];
  headlineData: any;
  paragraphData: any;
  imageUploadData: string;
  dataTimeData: Date;
  NwzCatgry: any;
  headlineDataI: string;
  headlineDataW: string;
  headlineDataS: any;
  headlineDataM: any;
  headlineDataB: any;
  headlineDataI2: string;
  NwzSubCatgry: string;
  constructor(     private router: Router,
                   private service:NewsService,
                   private route: ActivatedRoute) { }

  goHome() {
    this.router.navigate(['']); 
  }
  gotoIndia() {
    this.router.navigate(['india']); 
  }


  ngOnInit() {
    this.headlineDataI=  this.route.snapshot.paramMap.get('india');
    this.headlineDataI2=  this.route.snapshot.paramMap.get('india2');
    this.headlineDataW=  this.route.snapshot.paramMap.get('world');
    this.headlineDataS=  this.route.snapshot.paramMap.get('sports');
    this.headlineDataM=  this.route.snapshot.paramMap.get('movies');
    this.headlineDataB=  this.route.snapshot.paramMap.get('business');

    if(this.headlineDataI)
    {
    this.service.getIndia().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data; 
      });
       this.headlineData=  this.route.snapshot.paramMap.get('india')
console.log(this.headlineData+"inside india");
      this.getNewsData();
      // console.log(JSON.stringify(this.list)); 
   });
  } else if( this.headlineDataW)
  {
   this.service.getWorld().subscribe(actionArray => {
    this.list = actionArray.map(a => {
      const datap = a.payload.doc.data() as News;
      datap.id = a.payload.doc.id;
      // console.log(data);
      return datap; 
    });
    this.headlineData=  this.route.snapshot.paramMap.get('world')
    console.log(this.headlineData+"inside world");
    this.getNewsData();
    // console.log(JSON.stringify(this.list)); 
 });
}else if( this.headlineDataS)
{
 this.service.getSports().subscribe(actionArray => {
  this.list = actionArray.map(a => {
    const data = a.payload.doc.data() as News;
    data.id = a.payload.doc.id;
    // console.log(data);
    return data; 
  });
  this.headlineData=  this.route.snapshot.paramMap.get('sports')

  this.getNewsData();
  // console.log(JSON.stringify(this.list)); 
});
}else if( this.headlineDataM)
{
this.service.getMovies().subscribe(actionArray => {
  this.list = actionArray.map(a => {
    const data = a.payload.doc.data() as News;
    data.id = a.payload.doc.id;
    // console.log(data);
    return data; 
  });
  this.headlineData=  this.route.snapshot.paramMap.get('movies')

  this.getNewsData();
  // console.log(JSON.stringify(this.list)); 
});
}else if( this.headlineDataB)
{
this.service.getBusiness().subscribe(actionArray => {
  this.list = actionArray.map(a => {
    const data = a.payload.doc.data() as News;
    data.id = a.payload.doc.id;
    // console.log(data);
    return data; 
  });
  this.headlineData=  this.route.snapshot.paramMap.get('business')

    this.getNewsData();
  //  console.log(JSON.stringify(this.list)); 
});
}else if( this.headlineDataI2)
{
this.service.getIndia2().subscribe(actionArray => {
  this.list2 = actionArray.map(a => {
    const data = a.payload.doc.data() as News;
    data.id = a.payload.doc.id;
    // console.log(data);
    return data; 
  });
  this.headlineData=  this.route.snapshot.paramMap.get('india2')

    this.getNewsData2();
  //  console.log(JSON.stringify(this.list)); 
});
}
}

 getNewsData(){
for(var i=0;i<this.list.length;i++){
  if(this.list[i].headline==this.headlineData){

   this.paragraphData= this.list[i].paragraph;
   this.imageUploadData= this.list[i].imgUpload;
   this.dataTimeData=this.list[i].dateTime;
   this.NwzCatgry=this.list[i].category;
   this.NwzSubCatgry=this.list[i].subcategory;
   break;
  }
}
// console.log(this.paragraphData);
}

getNewsData2(){
  for(var i=0;i<this.list2.length;i++){
    if(this.list2[i].headline==this.headlineData){
  
     this.paragraphData= this.list2[i].paragraph;
     this.imageUploadData= this.list2[i].imgUpload;
     this.dataTimeData=this.list2[i].dateTime;
     this.NwzCatgry=this.list2[i].category;
     this.NwzSubCatgry=this.list2[i].subcategory;
     break;
    }
  }
  // console.log(this.paragraphData);
  }

}
