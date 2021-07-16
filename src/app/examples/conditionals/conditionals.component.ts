import { Component, OnInit } from '@angular/core';
import { HTTPService } from 'src/app/services/http.service';

@Component({
  selector: 'app-conditionals',
  templateUrl: './conditionals.component.html',
  styleUrls: ['./conditionals.component.scss']
})
export class ConditionalsComponent implements OnInit {

  ifCondition = false;
  switchCondition = 0;
  forList = [];

  constructor(private httpService: HTTPService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.httpService.retrieveData("").subscribe((result) => {
      console.log(result)
      this.forList = result.data
    });
  }

}
