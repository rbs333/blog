import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Doc } from '../model/doc';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL:string = 'https://aq9j0pujd0.execute-api.us-east-1.amazonaws.com/beta/content';

@Injectable({
  providedIn: 'root'
})

export class DocService {

  constructor(private http: HttpClient) { };

  getDocs() {
    // const doc = new Doc('Virginia Boy', '<div><h1>Lyrics</h1><div>blah...</div></div>', '1')
    // console.log(doc)
    // const mocked: Doc[] = [s
    //   doc
    // ];
    // return of(mocked)
    return this.http.get(API_URL)
      .pipe(map((docs: Array<Doc>)=>{
        let docMap:Doc[] = [];
        docs && docs.forEach((doc)=>{
          docMap.push({
            title: doc['title'],
            content: doc['content'],
            id: doc['id']
          });
        });
        return docMap;
      }));
  }
}
