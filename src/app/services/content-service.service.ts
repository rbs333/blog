import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Content } from '../model/content';
import { map } from 'rxjs/operators';

const API_URL:string = 'https://aq9j0pujd0.execute-api.us-east-1.amazonaws.com/beta/content';

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  constructor(private http: HttpClient) { };

  getContent() {
    return this.http.get(API_URL)
      .pipe(map((contents: Array<Content>)=>{
        let contentMap:Content[] = [];
        contents && contents.forEach((content)=>{
          contentMap.push({
            id: content['id'],
            title: content['title'],
            video: content['video'],
            audio: content['audio'],
            text: content['text']
          });
        });
        return contentMap;
      }));
  }
}
