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
  constructor(private router: Router,private service:NewsService,
    private route: ActivatedRoute) { }

  goHome() {
    this.router.navigate(['']); 
  }
  gotoIndia() {
    this.router.navigate(['india']); 
  }


  ngOnInit() {
    this.service.getnews().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data; 
      });
      this.headlineData=  this.route.snapshot.paramMap.get('desc')

 this.getparagraph();
      console.log(JSON.stringify(this.list)); 
   });

 
 }


 getparagraph(){
for(var i=0;i<this.list.length;i++){
  if(this.list[i].headline==this.headlineData){

   this.paragraphData= this.list[i].paragraph;
   this.imageUploadData= this.list[i].imgUpload;
   break;
  }
 
}

console.log(this.paragraphData);
}
}
