import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  @Input() content: any;

  toggleShow = (id) => {
    var element = document.getElementById(id);
    var height = parseInt(window.getComputedStyle(element).getPropertyValue('height').split("p")[0]);
    if (height/window.innerHeight < .605) {
      element.style.height = "auto";
    } else {
      element.style.height = "60vh";
    }
  }
}
