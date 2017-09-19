import { Component, OnInit } from '@angular/core';
import { GlobalPropertyService } from './services/global-property.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _hiddenNavs:boolean;
  constructor(
    private  glo:GlobalPropertyService
  ){}
  ngOnInit() {
      this._hiddenNavs = this.glo.hiddenNavs;
  }
  ngAfterContentChecked() {
    this._hiddenNavs = this.glo.hiddenNavs;
  }
}
