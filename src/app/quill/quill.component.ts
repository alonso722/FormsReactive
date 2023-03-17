import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit,OnDestroy {

  constructor(private comunicationService: ComunicationService) { }
  suscripcion!:Subscription;
  ngOnInit(): void {
    this.suscripcion=this.comunicationService.dato$.subscribe((flag)=>{
      if(flag===true)
      {
        this.comunicationService.dato2$.emit('Texto de quil Loreipsum Texto de quil Loreipsum Texto de quil Loreipsum Texto de quil Loreipsum Texto de quil Loreipsum ');
      }
    })
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
