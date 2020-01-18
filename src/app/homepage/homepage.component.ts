import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { Breakingnews } from '../shared/breakingnews.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  list: Breakingnews[];
  listArray:any;
  constructor(private router: Router,
    private service:NewsService) { }

  gotoBigNews() {
    this.router.navigate(['sub']); 
  }

  ngOnInit() {
    this.getBreakheadline();
  }


  getBreakheadline(){
    this.service.GetBreak().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as Breakingnews;
        data.id = a.payload.doc.id;
        // console.log(data);
        
        return data; 
      });

 
      console.log(JSON.stringify(this.list)); 
           this.listArray=this.list[0].headlinebrak;
           console.log(this.listArray[0]);
   });
  }
}
