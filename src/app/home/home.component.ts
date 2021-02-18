import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public video1;
  public poem1;

  constructor(private contentService: ContentService) { 
    this.contentService.getContentByTitle("Breakfast")
      .subscribe((res: any) => {
        this.poem1 = res.Item;
      });
    this.video1 = this.contentService.getContentByTitle("Thank God for Monday")
      .subscribe((res: any) => {
        this.video1 = res.Item;
      });
  }

  ngOnInit(): void {}

}
