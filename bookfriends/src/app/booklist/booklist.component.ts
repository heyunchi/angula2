import { Component, OnInit, } from '@angular/core';
import { books } from './../datas/datas';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  _books: any;
  _pagesize: number = 15;
  _pages: number
  sortText: string;
  sortText2: string;
  constructor() { }

  ngOnInit() {
    this._books = books.data;
    this._pages = Math.ceil(this._books.length / this._pagesize);
  }
  sort(str, str2) {
    this.sortText = str;
    this.sortText2 = str2;
  }
}
