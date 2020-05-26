import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { ContentService } from '../services/content-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  public contentList; 

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

}
