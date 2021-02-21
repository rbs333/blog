import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../model/content';
import { map } from 'rxjs/operators';
import * as config from '../../../config.json';

const API_URL:string = config.api_url;

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
    
    return this.http.post(API_URL + "/getContentbyKey", {"title": title}, httpOptions)
  }
}
