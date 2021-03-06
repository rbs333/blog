import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../model/content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  @Input() content: Content;
  @Input() showDivider = true;

  toggleShow = (id) => {
    var element = document.getElementById(id);
    var height = parseInt(window.getComputedStyle(element).getPropertyValue('height').split("p")[0]);
    if (height/window.innerHeight < .605) {
      element.style.maxHeight = "none"
      element.style.height = "auto";
    } else {
      element.style.maxHeight = "60vh";
    }
  }
}
