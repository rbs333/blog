import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../model/content';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';

const API_URL:string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  constructor(private http: HttpClient) { };

  getContent() {
    return this.http.get(API_URL + "/content")
      .pipe(
        map((contents: Array<Content>) => {
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
        }),
        catchError( error => {
          return throwError('Something went wrong with get all')
        })
      );
  }

  getContentByTitle(title: String) {
    // messed up the resource name on the API but work with
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    return this.http.post(API_URL + "/getContentbyKey", {"title": title}, httpOptions)
      .pipe(
        map((content: Content) => {
        return content as Content;
      }), catchError( error => {
        return throwError('Something went wrong with get by title')
      })
    )}
}
