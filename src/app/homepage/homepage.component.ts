import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { Breakingnews } from '../shared/breakingnews.model';
import { News } from '../shared/news.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomepageComponent implements OnInit {


  list: Breakingnews[];
  indialist: News[];
  worldlist: News[];
  sportlist: News[];
  movieslist: News[];
  businesslist: News[];
  listArray:any;
  newindialist: any;

  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
 

 
  constructor(    private router: Router,
                  private service:NewsService,
                  config: NgbCarouselConfig)
     {
                    config.interval = 100000;
                    config.wrap = true;
                   
     }

  gotoBigNews(data, val) {
    if(val==='india')
    {
    this.router.navigate(['sub',{india:data}]);
    }
    else
    {
    this.router.navigate(['sub',{world:data}]); 
    }
}
     
  

  ngOnInit() {
    this.getBreakheadline();
    this.getIndiaHome();
    
  }


  getBreakheadline(){
    this.service.GetBreak().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as Breakingnews;
        data.id = a.payload.doc.id;
        // console.log(data);
        
        return data; 
      });
      // console.log(JSON.stringify(this.list)); 
           this.listArray=this.list[0].headlinebrak;
          //  console.log(this.listArray[0]);
   });
  }


  getIndiaHome(){
    this.service.getIndia().subscribe(actionArray => {
      this.indialist = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data; 
        
      });
       console.log(JSON.stringify(this.indialist)); 
   });
   
  }

  // getWorldHome(){
  //   this.service.getWorld().subscribe(actionArray => {
  //     this.worldlist = actionArray.map(a => {
  //       const data = a.payload.doc.data() as News;
  //       data.id = a.payload.doc.id;
  //       // console.log(data);
  //       return data; 
  //     });
  //     // console.log(JSON.stringify(this.worldlist)); 
  //  });
  // }
  
  // stopvideo(){

  // }

}
