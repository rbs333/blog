import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content-service.service';
import { Content } from '../model/content';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html',
  styleUrls: ['./archive-item.component.css']
})
export class ArchiveItemComponent implements OnInit {
  title = ""
  public content: Content; 

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( params => {
      this.title = params["title"]
    })
  }

  ngOnInit() {
    this.getContentByTitle();
  }

  private getContentByTitle() {
    this.contentService.getContentByTitle(this.title)
      .subscribe(
        (data: any) => { 
          this.content = data.Item;
        },
        err => console.error(err),
        () => {}
    );
  }
}
