import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocService } from '../services/doc-service.service'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private DocService: DocService, private router:Router) { }

  public docs

  ngOnInit() {
    this.loadDocs();
  }

  private loadDocs() {
    this.DocService.getDocs().subscribe(
      data => { this.docs = data; },
      err => console.error(err),
      () => console.log("Docs loaded")
    )
  }

}
