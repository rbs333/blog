import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../services/content-service.service';
import { Content } from '../model/content';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html',
  styleUrls: ['./archive-item.component.css']
})
export class ArchiveItemComponent implements OnInit {
  // @Input() title: String;
  title = "Breakfast"
  public content: Content; 

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( params => {this.title = params["title"]})
  }

  ngOnInit() {
    this.getContentByTitle();
  }

  private getContentByTitle() {
    this.contentService.getContentByTitle(this.title).subscribe(
      (data: any) => { 
        this.content = data.Item;
      },
      err => console.error(err),
      () => console.log("content loaded.")
  );
}

//  todo figure out how title gets passed to component. 
}
