import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit{ 

  words : Word[] = [];
  constructor (private wordService: ServicesService){
  }
  ngOnInit(): void {

    this.wordService.getAllWords()
    .subscribe({
      next: (words) => {
       this.words = words;
      },
     error: (response: string[])  => {
      console.log(response);
     }
    })

  }

}
