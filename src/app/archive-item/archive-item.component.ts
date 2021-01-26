import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../services/content-service.service';
import { Content } from '../model/content';

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html',
  styleUrls: ['./archive-item.component.css']
})
export class ArchiveItemComponent implements OnInit {
  // @Input() title: String;
  title = "Breakfast"
  public content: any; 

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.getContentByTitle();
  }

  private getContentByTitle() {
    this.contentService.getContentByTitle(this.title).subscribe(
      (data: any) => { 
        this.content = data.Item;
        console.log("Object: ", data);
      },
      err => console.error(err),
      () => console.log("content loaded.")
  );
}

//  todo figure out how title gets passed to component. 
}
