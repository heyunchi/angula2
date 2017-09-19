import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('book_id');
    console.log(id);
  }
  toPay() {
    this.router.navigate(['/pay']);
  }
}
