import { Component, OnInit, HostListener } from '@angular/core';
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

  scrHeight:any;
  scrWidth:any;
  list: Breakingnews[];
  indialist: News[];
  worldlist: News[];
  sportlist: News[];
  movieslist: News[];
  businesslist: News[];
  listArray:any;
  newindialist: any;
  indiaHomeList= [];
  slidervisibility: boolean;

  constructor(    private router: Router,
                  private service:NewsService,
                  config: NgbCarouselConfig){}
    
  ngOnInit() {
    this.getScreenSize();
    this.getBreakheadline();
    this.getIndiaHome();
    
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }

      gotoSlider(){
    if(this.scrWidth>="900")
    {
    this.slidervisibility=true;
    }
}

  gotoBigNews(data, val) 
  {
      if(val==='india')
      {
      this.router.navigate(['sub',{india:data}]);
      }
      else
      {
      this.router.navigate(['sub',{world:data}]); 
      }
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
      //  console.log(JSON.stringify(this.indialist)); 
      for(let i=0; i<5; i++)
     {
      this.indiaHomeList.push( this.indialist[i] );
       console.log(JSON.stringify(this.indiaHomeList));
     }
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
