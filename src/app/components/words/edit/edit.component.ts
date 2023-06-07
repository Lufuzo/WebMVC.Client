import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { Word } from 'src/app/models/word.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  wordDetails: Word = {
    key : '',
    value: ''
   
};


  constructor(private route: ActivatedRoute, private wordService: ServicesService,private router: Router)
  {}
  
 /* ngOnInit(): void
  {}*/
  ngOnInit(): void
  {
    this.route.paramMap.subscribe({
      next: (params) =>{
       const id =  params.get('id');

       if(id)
       {
        this.wordService.getWords(id)
        .subscribe({
          next:(response)=>{
            this.wordDetails = response;
          }
        })
       }
      }
    })
  }
 updateWord()
  {
    this.wordService.updateWord(this.wordDetails.key!, this.wordDetails)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['words']);
      }
    })
  }

  deleteWordL(id: string)
  {
  this.wordService.DeleteWord(id)
  .subscribe({
     next:(response: any)=>{
      this.router.navigate(['words']);

    }
  })

  }
}
