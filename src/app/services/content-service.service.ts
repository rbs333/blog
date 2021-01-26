import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Content } from '../model/content';
import { map } from 'rxjs/operators';

const API_URL:string = 'https://aq9j0pujd0.execute-api.us-east-1.amazonaws.com/beta';

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  constructor(private http: HttpClient) { };

  getContent() {
    return this.http.get(API_URL + "/content")
      .pipe(map((contents: Array<Content>)=>{
        let contentMap:Content[] = [];
        contents && contents.forEach((content)=>{
          contentMap.push({
            date: content['date'],
            title: content['title'],
            video: content['video'],
            audio: content['audio'],
            text: content['text'],
            isExpandable: true ? content['text'].length > 700 : false
          });
        });
        return contentMap;
      }));
  }

  getContentByTitle(title: String) {
    // messed up the resource name on the API but work with
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(API_URL + "/getContentbyKey", {"title": title}, httpOptions);
  }
}
