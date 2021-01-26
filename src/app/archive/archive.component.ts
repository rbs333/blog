import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content-service.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  public contentList; 

  constructor(
    private contentService: ContentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadContent();
  }

  private loadContent() {
    this.contentService.getContent().subscribe(
      data => { this.contentList = data },
      err => console.error(err),
      () => console.log("content loaded.")
    );
  }

  private navigateToPage(title: String) {
    this.router.navigate(['archive', title]);
  }

}
