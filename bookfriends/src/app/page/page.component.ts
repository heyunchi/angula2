import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input()pages: number;
  pagelist: any = [];
  curpage: number = 1;
  constructor() { }

  ngOnInit() {
    for(let i=1;i<=this.pages;i++){
      this.pagelist.push(i);
    }
  }
  getCurPage(page){
    this.curpage = page;
  }
  nextPage(){
    if(this.curpage<this.pages){
      this.curpage +=1;
    }
  }
  prevPage(){
    if(this.curpage>1){
      this.curpage -=1;
    }
  }
}
