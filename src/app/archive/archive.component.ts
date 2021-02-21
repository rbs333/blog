import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  public contentList;
  public listView: Boolean = false;

  constructor(private contentService: ContentService) { }

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

  public toggleView() {
    this.listView = !this.listView;
  }

}
