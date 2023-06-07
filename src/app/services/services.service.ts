
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Word } from '../models/word.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

   baseApiUrl: string = environment.baseApiUrl;
  
  
  constructor(private http: HttpClient) { }

  getAllWords(): Observable<Word[]>
  {
  
    return this.http.get<Word[]>(this.baseApiUrl + '/api/words');
  }

  addNewWord(AddWordRequest: Word): Observable<Word>
  {
    return this.http.post<Word>(this.baseApiUrl + '/api/words', AddWordRequest);
  }

  getWords(id: string): Observable<Word>
  {
    return this.http.get<Word>(this.baseApiUrl + '/api/words/'+ id);
  }

 updateWord(id: string, updateWordRequest: Word): Observable<Word>
  {
   return this.http.put<Word>(this.baseApiUrl + '/api/words/'+ id, updateWordRequest);
  }

  DeleteWord(id: string): Observable<Word>
  {
   return this.http.delete<Word>(this.baseApiUrl + '/api/words/'+ id);
  }
  
}
