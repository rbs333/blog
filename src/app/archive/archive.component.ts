import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

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
