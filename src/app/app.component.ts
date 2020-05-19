import { Component } from '@angular/core';
import { ContentService } from './services/content-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private contentService: ContentService) { }

  public contentList;

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
