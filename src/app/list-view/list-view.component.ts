import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @Input() contentList: any; 

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }


  public navigateToPage(title: String) {
    this.router.navigate(['archive', title]);
  }

}
