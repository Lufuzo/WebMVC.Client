import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word.model';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {
  AddWordRequest: Word = {
    key : '',
    value: ''
   
};
constructor( private wordService: ServicesService, private router: Router){}
ngOnInit(): void{
}

addNewWord()
{
  this.wordService.addNewWord(this.AddWordRequest)
  .subscribe({

      next: (word) => {
       this.router.navigate(['/words']);
      }
  })
}
}